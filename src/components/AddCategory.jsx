import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {
  const [newCategory, setNewCategory] = useState("");
  const onInputChange = (e) => setNewCategory(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (newCategory.trim().length <= 1) return;
    // setCategories((prev) => [...prev, newCategory]);
    onNewCategory(newCategory.trim());
    setNewCategory("");
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Search gifs"
        value={newCategory}
        onChange={onInputChange}
      />
    </form>
  );
};
AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
export default AddCategory;
