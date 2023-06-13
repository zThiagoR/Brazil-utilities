/* eslint-disable prettier/prettier */
import { AxiosError, AxiosResponse } from "axios";
import { CepResponse } from "../../../@types";
import { brapi } from "../../services/brapi";

export const isValidCEP = (cep: string) => {
  const cepRegex = /^[0-9]{5}-[0-9]{3}$|^[0-9]{8}$/;
  return cepRegex.test(cep);
};

export const formatCEP = (cep: string) => {
  const cepRegex = /^([0-9]{5})([0-9]{3})$/;

  if (typeof cep !== "string") throw new Error("Invalid parameter type. The CEP (Postal Code) should be provided as a string.");
  if (!cepRegex.test(cep)) throw new Error("The CEP code must contain 8 numeric digits.");

  return cep.replace(cepRegex, "$1-$2");
};

export const fetchCEPInformation = async (cep: string): Promise<CepResponse> => {
  if (typeof cep !== "string") throw new Error("Invalid parameter type. The CEP (Postal Code) should be provided as a string.",);
  if (!isValidCEP(cep)) throw new Error("The CEP code must contain 8 numeric digits.");

  try {
    const response: AxiosResponse<CepResponse> = await brapi.get(
      `cep/v2/${cep}`,
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    
    if (err.response?.status === 404) throw new Error("CEP not found.");
    else throw new Error("An error occurred while trying to fetch the CEP information.");
  }
};
