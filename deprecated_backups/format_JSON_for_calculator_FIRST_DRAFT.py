import json

with open("brookline_properties.json", encoding="utf-8-sig") as json_file:
    properties = json.load(json_file)

properties = sorted(properties, key=lambda property: (property["StreetName"]))

converted_properties = []

for property in properties:
    converted_property = {}

    # assemble the Parcel ID from the block, lot and sub-lot. It's done this way because the original IDs supplied were not in the normal format.
    parcel_id = property["ParcelID"]

    street_number = property.get("StreetNumber", "(no number)")
    # assemble the address from the number, sub-number and street.
    alternate_number = (
        property.get("AlternateStreetNumber", "") + "-" + property.get("CondoUnit", "")
    )
    alternate_number = alternate_number.strip("-")

    if alternate_number != "":
        street_number = f"{street_number}-{alternate_number}"

    address = f"{street_number} {property['StreetName']}"

    converted_property["#"] = f"{address} ({parcel_id})"
    converted_property["$"] = property.get(
        "TotalValue", 0
    )  # Default to 0 if the TOT_VALUE field didn't exist.
    print(converted_property)
    converted_properties.append(converted_property)

# write the results to a new JSON file
with open("properties.json", "w", encoding="utf-8") as new_file:
    json.dump(converted_properties, new_file)
