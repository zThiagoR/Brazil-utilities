import axios from "axios";

const Url = "https://brasilapi.com.br/api";

export const brapi = axios.create({
  baseURL: Url,
});
