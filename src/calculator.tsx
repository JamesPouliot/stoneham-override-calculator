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
      <section className="calculator__inputs">
        <h2 className="calculator__heading">Enter your Info</h2>
        <form className="calculator__form">
          <fieldset className="calculator__fieldset">
            <div className="calculator__field">
              <label htmlFor="overrideValue" className="calculator__label">
                Hypothetical Override Amount
              </label>
              <div className="calculator__input-wrapper">
                <span className="calculator__currency-symbol">$</span>
                <NumericFormat
                  id="overrideValue"
                  className="calculator__input calculator__input--numeric"
                  name="New override amount"
                  type="text"
                  value={calculator.overrideValue}
                  onValueChange={(e) =>
                    calculator.onOverrideValueChange(e.floatValue)
                  }
                  placeholder={formatDollars(DEFAULT_OVERRIDE_AMOUNT)}
                  thousandSeparator={true}
                  allowNegative={false}
                  decimalScale={0}
                  max={14_600_000}
                  maxLength={10}
                />
              </div>
            </div>

            <div className="calculator__field">
              <label htmlFor="propertyAddress" className="calculator__label">
                Property Address
              </label>
              <Combobox
                value={calculator.selectedProperty}
                onChange={calculator.onPropertyChange}
              >
                <div className="calculator__combobox">
                  <ComboboxInput
                    id="propertyAddress"
                    className="calculator__input calculator__input--combobox"
                    placeholder="123 Main St"
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

            <div className="calculator__field">
              <label htmlFor="yourValue" className="calculator__label">
                Your Assessed Property Value
              </label>
              <div className="calculator__input-wrapper">
                <span className="calculator__currency-symbol">$</span>
                <NumericFormat
                  id="yourValue"
                  className="calculator__input calculator__input--numeric"
                  name="Your assessment value"
                  type="text"
                  value={calculator.assessedValue}
                  onValueChange={(e) =>
                    calculator.onAssessedValueChange(e.floatValue)
                  }
                  placeholder={formatDollars(DEFAULT_ASSESSED_VALUE)}
                  thousandSeparator={true}
                  allowNegative={false}
                  decimalScale={0}
                  max={100_000_000}
                  maxLength={11}
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>

      <section className="calculator__results calculator__results--tax-rate">
        <h2 className="calculator__heading">Estimated Tax Rate Increase</h2>
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term">Current Tax Rate</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.currentTaxRate}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per $1,000
              </span>
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">
              Proposed Tax Rate &#40;{" "}
              {calculator.calculatedValues.newTaxRateImpact} increase&#41;
            </dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.newTaxRate}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per $1,000
              </span>
            </dd>
          </div>
        </dl>
      </section>

      <section className="calculator__results calculator__results--tax-impact">
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term">Your Increase in Dollars</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.estimatedTaxImpactYearly}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per year
              </span>
            </dd>
            <dd className="calculator__detail calculator__detail--unit">
              {calculator.calculatedValues.estimatedTaxImpactQuarterly} per
              quarter
            </dd>
            <dd className="calculator__detail calculator__detail--unit">
              {calculator.calculatedValues.estimatedTaxImpactMonthly} per month
            </dd>
            <dd className="calculator__detail calculator__detail--unit">
              {calculator.calculatedValues.estimatedTaxImpactDaily} per day
            </dd>
          </div>
        </dl>
      </section>

      <section className="calculator__results calculator__results--tax-bill">
        <h2 className="calculator__heading">Your Total Estimated Tax Bill</h2>
        <dl className="calculator__data-list">
          <div className="calculator__data-item">
            <dt className="calculator__term">Current Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.currentTaxBillYearly}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per year
              </span>
            </dd>
            <dd className="calculator__detail calculator__detail--unit">
              {calculator.calculatedValues.currentTaxBillQuarterly} per quarter
            </dd>
          </div>

          <div className="calculator__data-item">
            <dt className="calculator__term">Proposed Bill</dt>
            <dd className="calculator__detail calculator__detail--value">
              {calculator.calculatedValues.newTaxBillYearly}{" "}
              <span class="calculator__detail calculator__detail--subscript">
                per year
              </span>
            </dd>
            <dd className="calculator__detail calculator__detail--unit">
              {calculator.calculatedValues.newTaxBillQuarterly} per quarter
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
          to the tax levy. This calculator is not approved nor endorsed by the
          Massachusetts Department of Revenue, Patriot Properties, nor any other
          official entity. Source code available via{" "}
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
