interface currentType {
  type: "USD" | "CAD" | "AUD" | "EUR" | "GBP" | "CHF" | "JPY";
  value: number;
}

interface Location {
  type: string;
  coordinates: {
    longitude: string;
    latitude: string;
  };
}

interface CepResponse {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: Location;
}

/**
 * Check if a CEP (postal code) is valid.
 * @param {string} cep - The CEP to be checked.
 * @returns {boolean} Returns true if the CEP is valid, otherwise returns false.
 */
export function isValidCEP(cep: string): boolean;

/**
 * Format a CEP (postal code) into the "xxxxx-xxx" format.
 * @param {string} cep - The CEP to be formatted.
 * @returns {string} The formatted CEP.
 */
export function formatCEP(cep: string): string;

/**
 * Fetch information for a CEP (postal code).
 * @param {string} cep - The CEP for which to retrieve information.
 * @returns {Promise<CepResponse>} A Promise that resolves with the CEP information.
 */
export function fetchCEPInformation(cep: string): Promise<CepResponse>;

/**
 * Check if a CPF (Social Security Number) is valid.
 * @param {string} cpf - The CPF to validate.
 * @returns Returns true if the CPF is valid, otherwise returns false.
 */
export function isValidCPF(cpf: string): boolean;

/**
 * Format a CPF (Social Security Number) with the standard format.
 * @param cpf - The CPF to format.
 * @returns The formatted CPF.
 * @throws Throws an error if the CPF is not a valid string or doesn't have the correct format.
 */
export function formatCPF(cpf: string): string;

/**
 * Convert a value from a specific currency to Brazilian Real (BRL).
 * @param {currentType} currency - The currency type and value to convert.
 * @returns {void} This function does not return any value.
 *
 * @example
 * // Convert 100 USD to BRL (Brazilian Real)
 * ```ts
 * convertToReal({ type: "USD (Estados Unidos)", value: 100 });
 * ```
 */
export function convertToReal({ type, value }: currentType): Promise<void>;
