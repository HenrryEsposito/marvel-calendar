import axios from "axios";

export const marvelApi = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_BASE_URL,
});
