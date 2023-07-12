export const getGifs = async (category) => {
  const key = "3baLos8gphAdZ7v9Z6gUcrswba3dgkuE";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`;
  const res = await fetch(url);
  const { data = {} } = await res.json();
  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
  return gifs;
};
