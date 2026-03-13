# BROOKLINE STAFF: How to update property values

Store the property values in an Excel (.xlsx) file and copy that file into the root folder of this project. If you're not sure what the file should look like, look at "EXAMPLE_PROPERTY_VALUES.xlsx".

We will now use the script "format_xlsx_for_calculator.py" to convert that Excel (.xlsx) file to a .json format that the calculator can use. Before running the script, open the script in any text editor and update the fields near the top to reflect the names your Excel (.xlsx) file. **It is important that the column names be exactly correct.**
NOTE: This script requires Python, as well as the Python modules "pandas" and "openpxyl". You may need to install these before this script works. Ask the internet, it's not super hard.

Now run the script. It should create a new file called "properties.json". Move that file into the "src" folder.

If you're using Visual Studio Code, run the following command in the Bash Terminal:
yarn build

Otherwise, you will need to open any other Bash terminal and run these two commands, replacing the filepath below with the correct one on your device:
cd "C:\Users\jpouliot\Documents\Override-Calculator"
yarn build

This overwrites the files in the 'dist' folder. Copy all of those new files from the 'dist' folder into the appropriate place in the Apps server, deleting the older versions on the Apps server.

# BROOKLINE STAFF: Walkthrough on how to change how this calculator works

If you're editing it for the first time on this device, open the folder in Visual Studio Code.
In the Bash terminal, enter the following commands:
npm install
npm install -g yarn

Next, From the Windows Start Menu, open Powershell as an administrator. Enter the following commands:
corepack enable
corepack prepare yarn@4.10.3 --activate
yarn -v (should read "4.10.3" or higher).

Back in Visual Studio Code's Bash Terminal, enter:
yarn install

---

Now you're ready to edit the files.

Edit the HTML and CSS by editing the files in the "Webpage" folder.
Edit the core HTML of the calculator by editing "calculator.tsx"
Edit the calculator's core logic by editing "use-calculator.ts"

---

After you're done editing these files, here's how to update the online calculator:
In Visual Studio Code, click any file in the "src" folder, then enter the following command into the Visual Studio Code Bash Terminal:
yarn build

This overwrites the files in the 'dist' folder. Copy all of those new files from the 'dist' folder into the appropriate place in the Apps server, deleting the older versions on the Apps server.

# Stoneham Override Calculator

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-blue)](https://robocafaz.github.io/stoneham-override-calculator/)

A property tax override calculator for the town of Stoneham, MA. This calculator helps residents estimate the impact of proposed Proposition 2½ overrides on their property tax bills.

## What It Does

The calculator computes:

- **Tax Rate Impact**: Current vs. proposed tax rates per $1,000 of assessed value
- **Tax Bill Estimates**: Annual and quarterly tax bills under current and proposed rates
- **Personal Tax Impact**: Annual, quarterly, monthly, and daily tax increase for your specific property

Users can either:

- Search for their property address to auto-populate the assessed value
- Manually enter their assessed property value
- Adjust the hypothetical override amount to model different scenarios

#### Important Disclaimers

**Official Use**: This calculator is for **demonstration and estimation purposes only**. Actual tax impacts may vary based on final override amounts, assessed property values, and other adjustments to the tax levy. This tool is not approved or endorsed by the town of Stoneham, the Massachusetts Department of Revenue, or any other official entity.

For complete technical details, see the comments in [src/use-calculator.ts](./src/use-calculator.ts).

## Usage

### Installation

```bash
yarn install
yarn build
```

This generates both minified and non-minified versions:

- `dist/stoneham-override-calculator.min.js` (minified for production)
- `dist/stoneham-override-calculator.js` (non-minified for debugging)
- `dist/index.html` (example page using the minified version)

### Injecting the Calculator

Add the calculator to any HTML page:

```html
<div id="calculator-container"></div>

<!-- Use the minified version for production -->
<script
  src="./stoneham-override-calculator.min.js"
  async
  defer
  onload="window.stonehamOverrideCalculator.renderCalculator('calculator-container')"
></script>

<!-- Or use the non-minified version for debugging -->
<!-- 
<script
  src="./stoneham-override-calculator.js"
  async
  defer
  onload="window.stonehamOverrideCalculator.renderCalculator('calculator-container')"
></script>
-->
```

The `renderCalculator` function accepts the ID of the container element where the calculator should be rendered.

**Key points:**

- Use `async` and `defer` attributes for optimal loading performance
- The `onload` handler ensures the calculator renders only after the script loads
- The container element can be any valid HTML element with a unique ID

See `example/index.html` for a complete working example.

## Styling

The calculator is fully customizable via CSS. All elements are scoped under the `#stoneham-override-calculator` ID to prevent style conflicts.

### CSS

All calculator elements use BEM-style class names and can be scoped to the root id `#stoneham-override-calculator`:

- `.calculator` - Root container
- `.calculator__heading` - Section headings
- `.calculator__input` - Input fields
- `.calculator__label` - Form labels
- `.calculator__data-item` - Result display boxes
- `.calculator__term` - Result labels
- `.calculator__detail` - Result values
- `.calculator__combobox-option` - Address dropdown items

See `example/style.css` for a complete styling reference and `src/calculator.tsx` for the full component structure.

## Development

### Scripts

- `yarn build` - Build the calculator bundle
- `yarn start` - Build and serve on http://localhost:3000
- `yarn format` - Format code with Prettier
- `yarn type-check` - Run TypeScript type checking
- `yarn test` - Run tests

### Methodology

**Tax Calculation Approach**: This calculator is based on the [Massachusetts Department of Revenue's Division of Local Services Tax Impact Calculator](https://dlsgateway.dor.state.ma.us/reports/rdPage.aspx?rdReport=Analysis.TaxImpactCalc) methodology for Stoneham (FY2025), but uses linear regression to project tax impacts rather than performing full levy calculations. Property assessments are sourced from public records via the [Stoneham Patriot Properties website](https://stoneham.patriotproperties.com/default.asp).

**Disclaimer**: This calculator is for demonstration purposes only. Estimates may be slightly different from official DOR calculations due to the linear regression approach and rounding differences. Actual tax impact may vary based on final override amount, assessed property values, and other adjustments to the tax levy. Not approved or endorsed by any official entity.
