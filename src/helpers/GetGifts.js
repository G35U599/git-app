import { SEARCH, KEY } from "./Giphy_API";

export const getGifts = async (category) => {
  const url = `${SEARCH}${KEY}&q=${encodeURI(
    category
  )}&limit=12&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // const error = Promise.reject(resp);
  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title || "Sin titulo",
      url:
        img.images?.downsized_medium.url ||
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    };
  });

  // error.catch((error) => {
  //   let message = error.statusText || "Error desconocido";
  //   document.documentElement.insertAdjacentHTML(
  //     "beforeend",
  //     `<h2 style="text-align: center; color: red;">Error ${error.status}: ${message}</h2>`
  //   );
  // });
  return gifts;
};
