import { fetchCEPInformation, formatCEP, isValidCEP } from "../src/index";
import { CepResponse } from "../@types";

describe("Format", () => {
  it("Format CEP without/with mask", () => {
    expect(formatCEP("12345678")).toBe("12345-678");
    expect(formatCEP("12345-678")).toBe("12345-678");
  });
});

describe("Validation", () => {
  it("Valid CEP with mask", () => {
    expect(isValidCEP("12345-678")).toBe(true);
  });

  it("Valid CEP without mask", () => {
    expect(isValidCEP("12345678")).toBe(true);
  });

  it("Invalid CEP without mask", () => {
    expect(isValidCEP("1")).toBe(false);
    expect(isValidCEP("12")).toBe(false);
    expect(isValidCEP("123")).toBe(false);
    expect(isValidCEP("1234")).toBe(false);
    expect(isValidCEP("12345")).toBe(false);
    expect(isValidCEP("123456")).toBe(false);
    expect(isValidCEP("1234567")).toBe(false);
    expect(isValidCEP("123456789")).toBe(false);
    expect(isValidCEP("1234567890")).toBe(false);
  });
});

describe("fetchCEPInformation", () => {
  it("should return a CepResponse object when given a valid CEP string", async () => {
    const cep = "01001000";
    const expectedResponse: CepResponse = {
      cep: "01001000",
      state: "SP",
      city: "São Paulo",
      neighborhood: "Sé",
      street: "Praça da Sé",
      service: "correios",
      location: {
        type: "Point",
        coordinates: {
          latitude: "-23.5507293",
          longitude: "-46.6344329",
        },
      },
    };

    const result = await fetchCEPInformation(cep);
    expect(result).toEqual(expectedResponse);
  });

  it("should throw an error when given an invalid CEP format", async () => {
    const cep = "abcde";

    await expect(fetchCEPInformation(cep)).rejects.toThrow("The CEP code must contain 8 numeric digits.");
  });
});
