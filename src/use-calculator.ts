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
// TODO This should probably be deleted.
export const DEFAULT_OVERRIDE_AMOUNT = 10_000_000;

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
  keys: ["address", "parcel_id"],
  ignoreLocation: true,
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
  /** First owner's last name */
  owner1: string;
  /** Second owner's last name */
  owner2: string;
  /** Taxes the owner is currently paying, without override */
  currentTaxes: number;
  /** Estimated annual tax total under the lowest override amount (formatted as currency) */
  yearlyTotalOverride1: number;
  /** Estimated annual tax total under the next-highest override amount (formatted as currency) */
  yearlyTotalOverride2: number;
  /** Estimated annual tax increase under the lowest override amount (formatted as currency) */
  yearlyImpactOverride1: number;
  /** Estimated annual tax increase under the next-highest override amount (formatted as currency) */
  yearlyImpactOverride2: number;
}

/**
 * Calculated tax impact values for display.
 *
 * All values are formatted as USD currency strings for direct rendering in the UI.
 * The hook recalculates these values whenever the assessed value or override amount changes.
 */
export interface CalculatedValues {
  // These are the custom values Brookline added
  /** First owner's last name */
  owner1: string;
  /** Second owner's last name */
  owner2: string;
  /** Taxes the owner is currently paying, without override */
  currentTaxes: string;
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
  /** All calculated tax impact values, formatted for display */
  calculatedValues: CalculatedValues;
  /** Handler called when a property is selected from the address dropdown */
  onPropertyChange: (property: Address | null) => void;
  /** Handler called when the address input text changes */
  onAddressInputChange: (event: Event) => void;
  /** Handler called when the assessed value input changes */
  onAssessedValueChange: (value: number | undefined) => void;
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
  const [assessedValue, setAssessedValue] = useState<number | undefined>(0);

  const [owner1, setOwner1] = useState<string | undefined>("(no data)");
  const [owner2, setOwner2] = useState<string | undefined>("(no data)");
  const [currentTaxes, setCurrentTaxes] = useState<number | undefined>(0);
  const [yearlyTotalOverride1, setYearlyTotalOverride1] = useState<
    number | undefined
  >(0);
  const [yearlyTotalOverride2, setYearlyTotalOverride2] = useState<
    number | undefined
  >(0);
  const [yearlyImpactOverride1, setYearlyImpactOverride1] = useState<
    number | undefined
  >(0);
  const [yearlyImpactOverride2, setYearlyImpactOverride2] = useState<
    number | undefined
  >(0);

  const [calculatedValues, setCalculatedValues] = useState<CalculatedValues>({
    owner1: "",
    /** Second owner's last name */
    owner2: "",
    /** Taxes owner is currently paying, without override */
    currentTaxes: "",
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
          owner2: item.owner2,
          currentTaxes: item.current_taxes,
          yearlyTotalOverride1: item["18m_override_total"],
          yearlyTotalOverride2: item["25m_override_total"],
          yearlyImpactOverride1: item["18m_override_increase"],
          yearlyImpactOverride2: item["25m_override_increase"],
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
    // Step 5: Format all values as currency strings and update state
    setCalculatedValues({
      owner1: owner1,
      owner2: owner2,
      currentTaxes: formatDollars(currentTaxes),
      yearlyTotalOverride1: formatDollars(yearlyTotalOverride1),
      yearlyTotalOverride2: formatDollars(yearlyTotalOverride2),
      yearlyImpactOverride1: formatDollars(yearlyImpactOverride1),
      yearlyImpactOverride2: formatDollars(yearlyImpactOverride2),
    });
  }, [assessedValue]);

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
      setOwner1(property.owner1 || "(no data)");
      setOwner2(property.owner2 || "(no data)");
      setCurrentTaxes(property.currentTaxes);
      setYearlyTotalOverride1(property.yearlyTotalOverride1);
      setYearlyTotalOverride2(property.yearlyTotalOverride2);
      setYearlyImpactOverride1(property.yearlyImpactOverride1);
      setYearlyImpactOverride2(property.yearlyImpactOverride2);
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
    calculatedValues,
    onPropertyChange,
    onAddressInputChange,
    onAssessedValueChange,
    getDisplayValue,
  };
};
