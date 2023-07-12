import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";
const GifApp = () => {
  const [categories, setCategories] = useState(["Valorant"]);
  const onAddCategory = (value) => {
    const exist = categories.some((category) => category == value);
    if (exist) return;
    setCategories((prev) => [value, ...prev]);
  };
  return (
    <>
      <h1>Gif App</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};

export default GifApp;
