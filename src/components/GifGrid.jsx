import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
import PropTypes from "prop-types";
export const GifGrid = ({ category }) => {
  const { isLoading, dataGifs } = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {dataGifs.map((gif) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
export default GifGrid;
