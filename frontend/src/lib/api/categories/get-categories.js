import { API_URL } from "../../../constants/api";


export const getCategories = async () => {
  try {
    const res = await fetch(`${API_URL}/categories`);

    let categories;
    if (res.ok) categories = await res.json();

    return {
      categories,
      hasError: false,
    };
  } catch (error) {
    return {
      productsList: undefined,
      hasError: true,
    };
  }
}