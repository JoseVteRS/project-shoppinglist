import { API_URL } from "../../../constants/api";
import { categoryGetById } from "../categories/category-by-id.api";

export const productListByCategory = async () => {
  try {
    const res = await fetch(`${API_URL}/products/grouped_by_category`);

    let productsByCategories;
    if (res.ok) productsByCategories = await res.json();

    let newArray = []
    for await (const item of productsByCategories.data) {
      console.log(item);
      const categoryById = categoryGetById(item._id);

      let nameCategory = await (await categoryById).category

      newArray.push({
        ...item,
        _id: nameCategory,
      });
    }

    return {
      productsByCategories,
      hasError: false,
    };
  } catch (error) {
    return {
      productsByCategories: undefined,
      error: error.message,
      hasError: true,
    };
  }
};
