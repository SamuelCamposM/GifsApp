import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [dataGifs, setDataGifs] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const getImages = async () => {
    const newGifs = await getGifs(category);
    setDataGifs(newGifs);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);
  return { dataGifs, isLoading };
};

export default useFetchGifs;
