import md5 from "md5";

import { marvelApi } from "../services/api";

export default function useMarvelAPI() {
  async function getCharacters(name: string) {
    const timeStamp = new Date().getTime();

    try {
      let res = await marvelApi.get("characters", {
        params: {
          ts: timeStamp,
          apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
          hash: md5(
            `${timeStamp}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
          ),
          name: name,
        },
      });

      let data = res.data.data.results;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }

      alert("Houve algum problema com a API da Marvel!");
      return [];
    }
  }

  return {
    getCharacters,
  };
}
