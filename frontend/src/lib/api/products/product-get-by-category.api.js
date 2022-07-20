import { API_URL } from "../../../constants/api";


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

