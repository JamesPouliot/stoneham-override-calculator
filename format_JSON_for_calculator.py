import json

with open("BrooklineParcelData.json", encoding="utf-8-sig") as json_file:
    data = json_file.read()

    properties = json.loads(data)

# TODO: SORT PROPERTIES FIRST BY STREET NAME, THEN BY NUMBER
properties = sorted(
    properties,
    key=lambda property: (property["PAR_ADD_ST_1"], property["PAR_ADD_NO_1"]),
)

converted_properties = []

for property in properties:
    converted_property = {}

    # assemble the Parcel ID from the block, lot and sub-lot. It's done this way because the original IDs supplied were not in the normal format.
    parcel_id = f"{property['BLOCK']}-{property['LOT']}-{property['SUB']}"

    # assemble the address from the number, sub-number and street.
    if property["PAR_ADD_NO_2"] == " " or property["PAR_ADD_NO_2"] not in properties:
        property["PAR_ADD_NO_2"] = ""
    else:
        property["PAR_ADD_NO_2"] = "-" + property["PAR_ADD_NO_2"]

    address = f"{property['PAR_ADD_NO_1']}{property['PAR_ADD_NO_2']} {property['PAR_ADD_ST_1']}"

    converted_property["#"] = f"{address} ({parcel_id})"
    converted_property["$"] = property.get(
        "TOT_VALUE", 0
    )  # Default to 0 if the TOT_VALUE field didn't exist.
    converted_properties.append(converted_property)

# write the results to a new JSON file
with open("properties.json", "w", encoding="utf-8") as new_file:
    json.dump(converted_properties, new_file)
