import { API_URL } from "../../../constants/api";


export const getCategories = async ()=> {
     try {
       const res = await fetch(`${API_URL}/categories`);

       let productsList;
       if (res.ok) productsList = await res.json();
       return {
         productsList,
         hasError: false,
       };
     } catch (error) {
       return {
         productsList: undefined,
         hasError: true,
       };
     }
}