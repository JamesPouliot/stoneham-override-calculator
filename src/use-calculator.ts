/**
 * @fileoverview Custom React hook for Massachusetts Proposition 2½ override tax calculator.
 *
 * This hook implements the business logic for calculating the impact of a Proposition 2½
 * override on property tax bills in Brookline, MA. It handles property search,
 * user input state management, and real-time tax impact calculations.
 *
 * ## Massachusetts Proposition 2½ Overview
 *
 * Proposition 2½ is a Massachusetts law that limits the amount of property tax revenue
 * a municipality can raise each year. An "override" is a permanent increase to the tax levy
 * that requires voter approval.
 *
 * ## Tax Rate Calculation Methodology
 *
 * ## Data Sources
 *
 * - Property assessments from Brookline Patriot Properties public records
 *
 * @module use-calculator
 */

import { useEffect, useState, useCallback } from "preact/hooks";
import Fuse from "fuse.js";
import PROPERTIES from "./properties.json";

/**
 * The default override amount to populate the "Override" field with.
 * Set to $10,000,000 as a representative example.
 */
export const DEFAULT_OVERRIDE_AMOUNT = 10_000_000;

// BUG REMOVE THIS
export const TEST_VALUE = "jiminy cricket";
/**
 * The default assessed property value to populate the "Assessed" field with.
 * Set to $765,770, which is close to the median assessed value in Stoneham (the original source of the calculator).
 */
export const DEFAULT_ASSESSED_VALUE = 765_770;

export const CURRENT_TAX_RATE = 10.24;

// TODO decide if these are necessary
export const RATE_IMPACT_SLOPE = 0.00000015103764965009;
export const RATE_IMPACT_INTERCEPT = -0.00288889605331910104;

/**
 * Format a number as a dollar amount.
 *
 * @param val - The value to format in dollars
 * @returns A formatted dollar string (e.g., "$10.23")
 */
export const formatDollars = (val: number) =>
  val.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

/**
 * Fuse.js instance for fuzzy searching property addresses.
 *
 * Configured to search the "#" key (property address) in the PROPERTIES dataset
 * with a threshold of 0.2 for relatively strict matching.
 *
 * @remarks
 * The threshold value of 0.2 means the search is fairly strict - only close matches
 * will be returned. A value of 0.0 requires perfect matches, while 1.0 matches everything.
 */
const fuse = new Fuse(PROPERTIES, {
  keys: ["#"],
  threshold: 0.2,
});

/**
 * Property address and assessment information.
 *
 * Represents a single property record from the Stoneham assessor's database.
 */
export interface Address {
  /** The street address of the property */
  address: string;
  /** The assessed property value in dollars (not cents) */
  value: number;
  //   BUG THIS IS A TEST
  owner1: string;
}

/**
 * Calculated tax impact values for display.
 *
 * All values are formatted as USD currency strings for direct rendering in the UI.
 * The hook recalculates these values whenever the assessed value or override amount changes.
 */
export interface CalculatedValues {
  /** Current tax rate per $1,000 of assessed value (formatted as currency) */
  currentTaxRate: string;
  /** Proposed tax rate per $1,000 of assessed value after override (formatted as currency) */
  newTaxRate: string;
  /** Increase in tax rate per $1,000 of assessed value (formatted as currency) */
  newTaxRateImpact: string;
  /** Current annual tax bill before override (formatted as currency) */
  currentTaxBillYearly: string;
  /** Proposed annual tax bill after override (formatted as currency) */
  newTaxBillYearly: string;
  /** Current quarterly tax bill before override (formatted as currency) */
  currentTaxBillQuarterly: string;
  /** Proposed quarterly tax bill after override (formatted as currency) */
  newTaxBillQuarterly: string;
  /** Estimated annual tax increase (formatted as currency) */
  estimatedTaxImpactYearly: string;
  /** Estimated quarterly tax increase (formatted as currency) */
  estimatedTaxImpactQuarterly: string;
  /** Estimated monthly tax increase (formatted as currency) */
  estimatedTaxImpactMonthly: string;
  /** Estimated daily tax increase (formatted as currency) */
  estimatedTaxImpactDaily: string;

  //   NOTE: These are the custom values Brookline added
  /** First owner's last name */
  owner1: string;
  /** Second owner's last name */
  owner2: string;
  /** Estimated annual tax total under the lowest override amount (formatted as currency) */
  yearlyTotalOverride1: string;
  /** Estimated annual tax total under the next-highest override amount (formatted as currency) */
  yearlyTotalOverride2: string;
  /** Estimated annual tax increase under the lowest override amount (formatted as currency) */
  yearlyImpactOverride1: string;
  /** Estimated annual tax increase under the next-highest override amount (formatted as currency) */
  yearlyImpactOverride2: string;
}

/**
 * Return type for the useCalculator hook.
 *
 * Provides all state values, computed values, and event handlers needed
 * to render and interact with the calculator UI.
 */
export interface UseCalculatorReturn {
  /** Whether property suggestions are currently loading from the search */
  isLoading: boolean;
  /** Array of property address suggestions from the fuzzy search */
  suggestions: Address[];
  /** The currently selected property from the address search */
  selectedProperty: Address | null;
  /** The current text in the address search input */
  query: string;
  /** The current assessed property value (in dollars, not cents) */
  assessedValue: number | undefined;
  /** The current override amount (in dollars) TODO THIS MIGHT BECOME IMPORTANT */
  overrideValue: number | undefined;
  /** All calculated tax impact values, formatted for display */
  calculatedValues: CalculatedValues;
  /** Handler called when a property is selected from the address dropdown */
  onPropertyChange: (property: Address | null) => void;
  /** Handler called when the address input text changes */
  onAddressInputChange: (event: Event) => void;
  /** Handler called when the assessed value input changes TODO I'll bet we need to change this*/
  onAssessedValueChange: (value: number | undefined) => void;
  /** Handler called when the override amount input changes */
  onOverrideValueChange: (value: number | undefined) => void;
  /** Function to compute the display value for the address combobox */
  getDisplayValue: (property: Address | null) => string;
}

/**
 * Custom hook that manages the calculator's business logic.
 *
 * This hook encapsulates all state management, event handlers, and tax calculations
 * for the Stoneham Proposition 2½ Override Calculator. It provides a clean interface
 * between the business logic and the React component layer.
 *
 * ## How It Works
 *
 * 1. **Property Search**: Uses Fuse.js for fuzzy searching of property addresses.
 *    Search results are debounced by 200ms to reduce unnecessary computation.
 *
 * 2. **State Management**: Manages user inputs (address, assessed value, override amount)
 *    and computed outputs (all tax impact calculations).
 *
 * 3. **Tax Calculations**: Automatically recalculates all tax impact values whenever
 *    the assessed value or override amount changes using a useEffect hook.
 *
 * 4. **Event Handlers**: All event handlers are wrapped in useCallback to prevent
 *    unnecessary re-renders and maintain stable function references.
 *
 * @returns Calculator state, computed values, and event handlers
 */
export const useCalculator = (): UseCalculatorReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Address[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Address | null>(
    null,
  );
  const [query, setQuery] = useState("");
  const [assessedValue, setAssessedValue] = useState<number | undefined>(
    DEFAULT_ASSESSED_VALUE,
  );
  //  TODO THIS SEEMS LIKE IT WILL BECOME IMPORTANT
  const [overrideValue, setOverrideValue] = useState<number | undefined>(
    DEFAULT_OVERRIDE_AMOUNT,
  );

  //   BUG REMOVE THIS
  const [testOwner1, setTestOwner1] = useState<string | undefined>(TEST_VALUE);

  const [calculatedValues, setCalculatedValues] = useState<CalculatedValues>({
    currentTaxRate: "",
    newTaxRate: "",
    newTaxRateImpact: "",
    currentTaxBillYearly: "",
    newTaxBillYearly: "",
    currentTaxBillQuarterly: "",
    newTaxBillQuarterly: "",
    estimatedTaxImpactYearly: "",
    estimatedTaxImpactQuarterly: "",
    estimatedTaxImpactMonthly: "",
    estimatedTaxImpactDaily: "",
    owner1: "",
    /** Second owner's last name */
    owner2: "",
    /** Estimated annual tax total under the lowest override amount (formatted as currency) */
    yearlyTotalOverride1: "",
    /** Estimated annual tax total under the next-highest override amount (formatted as currency) */
    yearlyTotalOverride2: "",
    /** Estimated annual tax increase under the lowest override amount (formatted as currency) */
    yearlyImpactOverride1: "",
    /** Estimated annual tax increase under the next-highest override amount (formatted as currency) */
    yearlyImpactOverride2: "",
  });

  /**
   * Searches for property addresses matching the given query.
   *
   * Uses Fuse.js to perform fuzzy searching and returns up to 10 results.
   * Results are mapped from the raw property data format to the Address interface.
   *
   * @param searchQuery - The text to search for in property addresses
   */
  const fetchSuggestions = useCallback(async (searchQuery: string) => {
    setIsLoading(true);
    try {
      const data = fuse
        .search(searchQuery)
        .slice(0, 10)
        .map(({ item }) => ({
          address: item["#"],
          value: item.$,
          owner1: item.owner1,
        }));
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Debounced version of fetchSuggestions.
   *
   * Delays the search by 200ms to avoid excessive computation while the user is typing.
   * Clears any pending search when a new search is initiated.
   *
   * @param searchQuery - The text to search for in property addresses
   */
  const debouncedFetchSuggestions = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (searchQuery: string) => {
        setIsLoading(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fetchSuggestions(searchQuery), 200);
      };
    })(),
    [fetchSuggestions],
  );

  /**
   * Effect hook that recalculates all tax impact values when inputs change.
   *
   * This is the core calculation logic that implements the Proposition 2½ override
   * tax impact formula. It runs whenever the assessed value or override amount changes.
   *
   * ## Calculation Steps:
   *
   * 1. Calculate the tax rate impact using linear equation: y = mx + b
   * 2. Calculate the proposed new tax rate
   * 3. Calculate current and proposed tax bills
   * 4. Calculate the difference (impact) for various time periods
   * 5. Format all values as currency strings for display
   */
  useEffect(() => {
    const currentOverride = overrideValue ?? 0;

    // Step 1: Calculate the tax rate impact using the linear equation
    // y = mx + b where y = tax rate impact (per $1,000), x = override amount
    const rateImpact = Math.abs(
      Math.ceil(
        100 * (RATE_IMPACT_SLOPE * currentOverride + RATE_IMPACT_INTERCEPT),
      ) / 100,
    );

    // Step 2: Calculate the proposed new tax rate (per $1,000 of assessed value)
    // Formula: Current Rate + Rate Impact -- truncated to 2 decimal places
    const proposedNewTaxRate = CURRENT_TAX_RATE + rateImpact;

    // TODO make this actually find the number
    const yearlyTotalOverride1 = 1.1111;
    const yearlyTotalOverride2 = 2.2222;
    const yearlyImpactOverride1 = 3.3333;
    const yearlyImpactOverride2 = 4.4444;

    // Step 3: Calculate current and proposed tax bills
    // Formula: (Assessed Value / 1000) × Tax Rate
    const currentTaxBill = ((assessedValue ?? 0) / 1_000) * CURRENT_TAX_RATE;
    const newTaxBill = ((assessedValue ?? 0) / 1_000) * proposedNewTaxRate;

    // Step 4: Calculate the tax bill impact for various time periods
    const taxBillImpactYearly = newTaxBill - currentTaxBill;
    const taxBillImpactQuarterly = taxBillImpactYearly / 4;
    const taxBillImpactMonthly = taxBillImpactYearly / 12;
    const taxBillImpactDaily = taxBillImpactYearly / 365; //unused for Brookline.

    // Step 5: Format all values as currency strings and update state
    setCalculatedValues({
      currentTaxRate: formatDollars(CURRENT_TAX_RATE),
      newTaxRate: formatDollars(proposedNewTaxRate),
      newTaxRateImpact: formatDollars(rateImpact),
      currentTaxBillYearly: formatDollars(currentTaxBill),
      newTaxBillYearly: formatDollars(newTaxBill),
      currentTaxBillQuarterly: formatDollars(currentTaxBill / 4),
      newTaxBillQuarterly: formatDollars(newTaxBill / 4),
      estimatedTaxImpactYearly: formatDollars(taxBillImpactYearly),
      estimatedTaxImpactQuarterly: formatDollars(taxBillImpactQuarterly),
      estimatedTaxImpactMonthly: formatDollars(taxBillImpactMonthly),
      estimatedTaxImpactDaily: formatDollars(taxBillImpactDaily),
      owner1: testOwner1,
      owner2: "",
      yearlyTotalOverride1: formatDollars(yearlyTotalOverride1),
      //   TODO Fix this so that it's a separate variable for the second override
      yearlyTotalOverride2: formatDollars(yearlyTotalOverride2),
      yearlyImpactOverride1: formatDollars(yearlyImpactOverride1),
      //   TODO Fix this so that it's a separate variable for the second override
      yearlyImpactOverride2: formatDollars(yearlyImpactOverride2),
    });
  }, [assessedValue, overrideValue]);

  /**
   * Handler for when a property is selected from the address dropdown.
   *
   * When a property is selected, updates the selected property state and
   * auto-fills the assessed value and query fields with the property's data.
   *
   * @param property - The selected property, or null if cleared
   */
  const onPropertyChange = useCallback((property: Address | null) => {
    setSelectedProperty(property);
    if (property) {
      setAssessedValue(property.value);
      setQuery(property.address);
      setTestOwner1(property.owner1);
    }
  }, []);

  /**
   * Handler for when the address input text changes.
   *
   * Updates the query state and triggers a debounced property search.
   *
   * @param event - The input change event
   */
  const onAddressInputChange = useCallback(
    (event: Event) => {
      const value = (event.target as HTMLInputElement).value;
      setQuery(value);
      debouncedFetchSuggestions(value);
    },
    [debouncedFetchSuggestions],
  );

  /**
   * Handler for when the assessed value input changes.
   *
   * @param value - The new assessed value (in dollars), or undefined if cleared
   */
  const onAssessedValueChange = useCallback((value: number | undefined) => {
    setAssessedValue(value);
  }, []);

  /**
   * Handler for when the override amount input changes.
   *
   * @param value - The new override amount (in dollars), or undefined if cleared
   */
  const onOverrideValueChange = useCallback((value: number | undefined) => {
    setOverrideValue(value);
  }, []);

  /**
   * Computes the display value for the address combobox.
   *
   * Returns the selected property's address if one is selected,
   * otherwise returns the current search query text.
   *
   * @param property - The currently selected property, or null
   * @returns The text to display in the combobox input
   */
  const getDisplayValue = useCallback(
    (property: Address | null) => property?.address ?? query,
    [query],
  );

  return {
    isLoading,
    suggestions,
    selectedProperty,
    query,
    assessedValue,
    overrideValue,
    calculatedValues,
    onPropertyChange,
    onAddressInputChange,
    onAssessedValueChange,
    onOverrideValueChange,
    getDisplayValue,
  };
};
