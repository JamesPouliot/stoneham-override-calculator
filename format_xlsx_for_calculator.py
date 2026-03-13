import math, json, pandas

# !!! UPDATING THIS FILE? EDIT THESE FIELDS AND NOTHING ELSE !!!
excel_file = "FY2026_Property_Assessments_for_Website_Override.xlsx"
XLSX_column_name_for_current_assessed_value = "FY2026VALUE"
XLSX_column_name_for_current_tax_bill = "FY26 TAXES "
XLSX_column_name_for_total_taxes_under_1st_override_amount = "Taxes @ 18M Override"
XLSX_column_name_for_tax_increase_under_1st_override_amount = "Tax Delta @ 18M Override"
XLSX_column_name_for_total_taxes_under_2nd_override_amount = "Taxes @ 25M Override"
XLSX_column_name_for_tax_increase_under_2nd_override_amount = "Tax Delta @ 25M Override"

# !!! DON'T TOUCH ANYTHING BELOW THIS !!!

try:
    print("opening excel file, PLEASE WAIT")
    # Try to use Pandas with openpyxl to read the excel file. If that doesn't work, try again with the "calamine" engine
    properties = pandas.read_excel(excel_file, engine="openpyxl")
except Exception as e:
    print(f"Error reading Excel file: {e}")
    print("\nTrying with 'calamine' engine as fallback...")
    properties = pandas.read_excel(excel_file, engine="calamine")


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
        combined_number += f", Unit {condo_number}"

    address = f"{street_number} {street_name}{combined_number}"
    return address


# sort the properties by street name first, then then by street number
print("sorting properties")
properties = properties.sort_values(
    by=["Street Name", "Street Number", "Alternate Street Number", "Condo Unit"]
)

properties = properties.fillna("")

# transform into python dictionary
print("converting to python dictionary")
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

    # assemble the final property dictionary as it will appear in the JSON file
    converted_property = {
        "#": f"{address} ({property.get('Parcel ID', '')})",
        "$": property.get(XLSX_column_name_for_current_assessed_value, 0),
        "address": address,
        "parcel_id": property.get("Parcel ID", "(no data)"),
        "owner1": property.get("Owner1Last Name", "(no data)"),
        "owner2": property.get("Owner2Last Name", "(no data)"),
        "current_taxes": property.get(
            XLSX_column_name_for_current_tax_bill, "(no data)"
        ),
        # these dollar values were calculated with fractions of a penny; round them down to 2 places for the nearest penny.
        "18m_override_total": round(
            property.get(XLSX_column_name_for_total_taxes_under_1st_override_amount, 0),
            2,
        ),
        "18m_override_increase": round(
            property.get(
                XLSX_column_name_for_tax_increase_under_1st_override_amount, 0
            ),
            2,
        ),
        "25m_override_total": round(
            property.get(XLSX_column_name_for_total_taxes_under_2nd_override_amount, 0),
            2,
        ),
        "25m_override_increase": round(
            property.get(
                XLSX_column_name_for_tax_increase_under_2nd_override_amount, 0
            ),
            2,
        ),
    }
    converted_properties.append(converted_property)

# write the results to a new JSON file
with open("properties.json", "w", encoding="utf-8") as new_file:
    print("creating JSON file")
    json.dump(converted_properties, new_file)

print("DONE")
