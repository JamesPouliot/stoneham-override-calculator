"use client";

import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { NumericFormat } from "react-number-format";
import {
  DEFAULT_ASSESSED_VALUE,
  DEFAULT_OVERRIDE_AMOUNT,
  formatDollars,
  useCalculator,
} from "./use-calculator";

/**
 * Calculator component for the Brookline Override Calculator.
 *
 * Renders a form for inputting property information and displays
 *   calculated tax impact results.
 */
export const Calculator = () => {
  const calculator = useCalculator();

  return (
    <article id="override-calculator" className="calculator">
      <h1>Brookline Override Calculator</h1>
      <h2 className="calculator__heading">Enter your Info</h2>
      <section className="calculator__inputs">
        <div>
          <form className="calculator__form">
            <fieldset className="calculator__fieldset">
              <div className="calculator__field">
                <label htmlFor="propertyAddress" className="calculator__label">
                  Address or Parcel ID
                </label>
                <Combobox
                  value={calculator.selectedProperty}
                  onChange={calculator.onPropertyChange}
                >
                  <div className="calculator__combobox">
                    <ComboboxInput
                      id="propertyAddress"
                      className="calculator__input calculator__input--combobox"
                      placeholder='"123 Main St" or "001-23-04"'
                      displayValue={calculator.getDisplayValue}
                      onChange={calculator.onAddressInputChange}
                    />
                    <ComboboxOptions className="calculator__combobox-options">
                      {calculator.isLoading ? (
                        <div className="calculator__combobox-message">
                          Loading...
                        </div>
                      ) : calculator.suggestions.length === 0 &&
                        calculator.query.length > 2 ? (
                        <div className="calculator__combobox-message">
                          <strong>No properties found</strong>
                        </div>
                      ) : (
                        calculator.suggestions.map((suggestion, index) => (
                          <ComboboxOption
                            key={index}
                            value={suggestion}
                            className="calculator__combobox-option"
                          >
                            <div className="calculator__combobox-option-address">
                              {suggestion.address}
                            </div>
                            <div className="calculator__combobox-option-value">
                              Assessed Value: {formatDollars(suggestion.value)}
                            </div>
                          </ComboboxOption>
                        ))
                      )}
                    </ComboboxOptions>
                  </div>
                </Combobox>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="calculator__static-info">
          <dl>
            <dt>Assessed Value:</dt>
            <dd>{formatDollars(calculator.assessedValue)}</dd>
            <dt>Owner 1:</dt>
            <dd>{calculator.calculatedValues.owner1}</dd>
            <dt>Owner 2:</dt>
            <dd>{calculator.calculatedValues.owner2}</dd>
          </dl>
        </div>
      </section>

      <section className="calculator__results calculator__results--current-tax-bill">
        <h2 className="calculator__heading">Total Tax Bill</h2>
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term">Current</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.currentTaxes}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per year
              </span>
            </dd>
          </div>
        </dl>
      </section>
      <section className="calculator__results calculator__results--future-tax-bill">
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term"> Total with $18m Override</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.yearlyTotalOverride1}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per year
              </span>
            </dd>
            <dd className="calculator__detail .calculator__detail--unit">
              ({calculator.calculatedValues.yearlyImpactOverride1} increase)
            </dd>
          </div>
          <div className="calculator__data-item">
            <dt className="calculator__term"> Total with $25m Override</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.yearlyTotalOverride2}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per year
              </span>
            </dd>
            <dd className="calculator__detail .calculator__detail--unit">
              ({calculator.calculatedValues.yearlyImpactOverride2} increase)
            </dd>
          </div>
        </dl>
      </section>

      <footer className="calculator__footer">
        <p className="calculator__disclaimer">
          Methodology derived from the{" "}
          <a
            href="https://dlsgateway.dor.state.ma.us/reports/rdPage.aspx?rdReport=Analysis.TaxImpactCalc"
            className="calculator__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mass. DOR's Division of Local Services Tax Impact Calculator
          </a>{" "}
          for the Town of Brookline (FY2026). Property assessments pulled from
          public record via the{" "}
          <a
            href="https://brooklinema.patriotproperties.com/default.asp"
            className="calculator__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brookline, MA Property Database
          </a>
          . For demonstration purposes only. Actual tax impact may vary based on
          final override amount, assessed property values, and other adjustments
          to the tax levy. Source code available via{" "}
          <a
            href="https://github.com/RoboCafaz/stoneham-override-calculator"
            className="calculator__link"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </article>
  );
};
