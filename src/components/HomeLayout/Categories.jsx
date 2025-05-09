import React, {use} from "react";
import Category from "./Category";
const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <>
      <h1 className="font-semibold text-lg">All Caterogy</h1>
      <div className="flex flex-col gap-3 mt-2">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </>
  );
};

export default Categories;
