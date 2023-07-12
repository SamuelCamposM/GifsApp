import { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={newCategory}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
