import math, json, pandas

excel_file = "SAMPLE.xlsx"

properties = pandas.read_excel(excel_file)


def drop_unused_columns(properties):
    properties = properties.drop(
        columns=[
            "Property ID",
            "Composite Land Use Code",
            "Neighborhood",
            "Num_units",
            "User Account",
            "Billing Address",
            "City",
            "State",
            "Country",
            "Zip Code",
            "Total Area",
            "Year Built",
            "Total Finished Area",
            "Commercial Units",
            "Residential Units",
            "ZONING",
            "Legal Reference",
            "Sale Date",
            "Sale Price",
            "Owner Occupied",
            "Condo Percent Owner",
        ]
    )
    return properties


def fix_numbers(number):
    try:
        number = str(int(number))
    except:
        number = ""
    return number


def assemble_address(street_number, alternate_number, condo_number, street_name):
    street_number = fix_numbers(street_number)

    combined_number = ""
    # assemble the address from the number, sub-number and street.
    if alternate_number != "":
        combined_number += f", Unit {alternate_number}"
    if condo_number != "":
        combined_number += f", Condo {condo_number}"

    address = f"{street_number} {street_name}{combined_number}"
    return address


# remove all columns from the xlsx that we're not going to use.
properties = drop_unused_columns(properties)

# sort the properties by street name first, then then by street number
properties = properties.sort_values(
    by=["Street Name", "Street Number", "Alternate Street Number", "Condo Unit"]
)

properties = properties.fillna("")

# transform into python dictionary
properties = properties.to_dict("records")

converted_properties = []

for property in properties:

    address = assemble_address(
        property.get("Street Number", ""),
        property.get("Alternate Street Number", ""),
        property.get("Condo Unit", ""),
        property["Street Name"],
    )
    address = address.title()

    print(address)
    converted_property = {
        "#": f"{address} ({property.get('Parcel ID', '')})",
        "$": property.get("FY2026VALUE", 0),
        "owner1": property.get("Owner1Last Name", "(no data)").title(),
        "owner2": property.get("Owner2Last Name", "(no data)").title(),
        "current_taxes": property.get("FY26 TAXES ", "(no data)"),
        "18m_override_total": round(property.get("Taxes @ 18M Override", 0), 2),
        "18m_override_increase": round(property.get("Tax Delta @ 18M Override", 0), 2),
        "25m_override_total": round(property.get("Taxes @ 25M Override", 0), 2),
        "25m_override_increase": round(property.get("Tax Delta @ 25M Override", 0), 2),
    }
    converted_properties.append(converted_property)

# write the results to a new JSON file
with open("properties.json", "w", encoding="utf-8") as new_file:
    json.dump(converted_properties, new_file)
