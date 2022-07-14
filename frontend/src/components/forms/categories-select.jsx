import { useEffect, useState } from "react";
import { getCategories } from "../../lib/api/categories/get-categories";

const SelectCategories = ({ label, register }) => {
  const [categoriesOptions, setCategoriesOptions] = useState([]);

  useEffect(() => {
    getCategoriesForOptions(setCategoriesOptions);
  }, [getCategoriesForOptions]);


  if (!categoriesOptions) <p>"Cargando categories"</p>;

  return (
    <select
      {...register(label)}
      name={label}
      id={label}
      className="border-2 border-gray-400 rounded-lg bg-transparent p-4 w-full mb-5 focus:outline-yellow-500"
    >
      <option>Choose a category</option>
      {
        categoriesOptions?.data?.map((category) => {
          return (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          );
        })}
    </select>
  );
};

const getCategoriesForOptions = async (setCategoriesOptions) => {
  const res = await getCategories();
  if (res.hasError) return [];
  setCategoriesOptions(res.categories);
};

export default SelectCategories;
