import md5 from "md5";

import { marvelApi } from "../services/api";
import { ICharacterInfo } from "../store/event/types";

export default function useMarvelAPI() {
  async function getCharacter(
    name: string
  ): Promise<ICharacterInfo | undefined> {
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

      const results = res.data.data.results;

      if (results.length) {
        const firstChar = results[0];
        return {
          id: firstChar.id,
          name: firstChar.name,
          thumbSrc: `${firstChar.thumbnail.path}.${firstChar.thumbnail.extension}`,
        };
      }

      return;
    } catch (error) {
      alert("Houve algum problema com a API da Marvel!");

      if (error instanceof Error) {
        console.log(error.message);
        throw error;
      }
    }
  }

  return {
    getCharacter,
  };
}
