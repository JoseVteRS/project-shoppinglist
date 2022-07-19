import React, { useEffect, useState } from "react";
import { getCategories } from "../../lib/api/categories/get-categories";

const CustomSelect = ({ setCategory }) => {
  const [categories, setCategories] = useState(undefined);

  useEffect(() => {
    const fetchCategories = async () => {
      const { categories } = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  if (!categories) return <p>Loading categories...</p>;
  return (
    <div className="shadow rounded-xl p-4 border">
      {categories.data.map((category) => {
        return (
          <div
            onClick={() => setCategory(category._id)}
            key={category._id}
            className="hover:bg-gray-100 text-gray-500 hover:text-gray-800 hover:font-bold p-2 rounded-xl text-lg cursor-pointer"
          >
            <p>{category.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomSelect;
