/* eslint-disable prettier/prettier */
import axios from "axios";
import { currentType } from "../../../@types";

export const convertToReal = async ({ type, value }: currentType) => {
  const url = "https://br.investing.com/currencies/exchange-rates-table";
  const arr = [];

  try {
    const response = await axios.get(url);
    const html = response.data;

    const regexTableContent = /<table[^>]*>([\s\S]*?)<\/table>/;
    const tableContent = html.match(regexTableContent) ? html.match(regexTableContent)[0] : null;

    const regexCurrenciesContent = /<td\s+class="left first"[^>]*>([\s\S]*?)<\/td>/g
    const currenciesContent = tableContent?.match(regexCurrenciesContent) ? tableContent?.match(regexCurrenciesContent) : null;

    const regexCurrency = /<span[^>]*ceFlags[^>]*">&nbsp;<\/span>\n&nbsp;\s*([^<]+)/;
    const currencies = currenciesContent.map((element: string) => {
      const match = element.match(regexCurrency);
      const currency = match ? match[1].trim() : '';
      return currency;
    });

    const regexValuesContent = /<td[^>]*id="[^"]*_35"[^>]*>([\s\S]*?)<\/td>/g;
    const valuesContent = tableContent.match(regexValuesContent).map((match: string) => match.replace(/<[^>]*>/g, '').trim());

    currencies.map((currency: string, index: number) => {
      const value = parseFloat(valuesContent[index].replace(",", "."));

      arr.push({ currency, value });
    })

    const typeSelected = arr.find((element) => element.currency === type);
    
    if (!typeSelected) throw new Error("Currency not found.");

    const convertedValue = +Number((value * typeSelected.value)).toFixed(2);

    return convertedValue;
  } catch (error) {
    throw new Error(error);
  }
};
