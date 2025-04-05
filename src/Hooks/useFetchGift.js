import { useState, useEffect } from "react";
import { getGifts } from "./../helpers/GetGifts";

export const useFetchGift = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifts(category).then((imgs) => {
      setstate({
        data: [...imgs],
        loading: false,
      });
    });
  }, [category]);

  return state;
};
