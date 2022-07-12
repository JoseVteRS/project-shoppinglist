import { useReducer } from "react";
import { PRODUCT_ACTIONS } from "../../constants/actions/product-actions";
import { productGetById } from "../../lib/api/products/product-get-by-id.api";
import { ProductContext } from "../../lib/context/product-context";
import {
  productReducer,
  PRODUCTS_CONTEXT_INITIAL_STATE,
} from "../../lib/reducers/product-reducer";

 const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    productReducer,
    PRODUCTS_CONTEXT_INITIAL_STATE
  );

  const listProducts = async () => {
    const dataProduct = await productListAllApi();
    if (!dataProduct) return null;
    dispatch({
      type: PRODUCT_ACTIONS.PRODUCTS_LIST_INDEX,
      payload: dataProduct.productsList.data,
    });
  };

  const selectProduct = async (productId) => {
    const product = await productGetById(productId);
    dispatch({
      type: PRODUCT_ACTIONS.PRODUCT_INFO,
      payload: product.product.data,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        listProducts,
        selectProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};


export default ProductProvider;