import { API_URL } from "../../../constants/api";
import { categoryGetById } from "../categories/category-by-id.api";

/**
 * @deprecated Since 14/07/2022
 */
export const productListByCategory = async () => {
  try {
    const res = await fetch(`${API_URL}/products/grouped_by_category`);

    let productsByCategories;
    if (res.ok) productsByCategories = await res.json();

    let productsByCategory = []
    for await (const item of productsByCategories.data) {
      const categoryById = categoryGetById(item._id);

      let nameCategory = await (await categoryById).category.data.name


      productsByCategory.push({
        ...item,
        _id: nameCategory || "",
      });
    }

    return {
      productsByCategory,
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

export const productListByCategories = async ()=> {
   try {
    const res = await fetch(`${API_URL}/products/grouped_by_category`);

    let productsByCategories;
    if (res.ok) productsByCategories = await res.json();

    return {
      productsGrouped: productsByCategories,
      hasError: false,
    };

   } catch(error) {
      return {

        hasError: true,
        error: error.message
      }
   }
}

