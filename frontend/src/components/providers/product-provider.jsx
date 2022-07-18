import { useEffect, useReducer } from "react";
import { PRODUCT_ACTIONS } from "../../constants/actions/product-actions";
import { productListByCategories } from "../../lib/api/products/product-get-by-category.api";
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
    const dataProduct = await productListByCategories();
    if (!dataProduct) return null;
    dispatch({
      type: PRODUCT_ACTIONS.PRODUCTS_LIST_INDEX,
      payload: dataProduct.productsGrouped.data,
    });
  };

  const addProductToIndexListOnCreate = (product) => {
    dispatch({
      type: PRODUCT_ACTIONS.PRODUCT_ADD_TO_INDEX_ON_CREATE,
      payload: [...state.productListIndex, ...product],
    });
  };

  useEffect(() => {
    listProducts();

  }, []);

  const selectProduct = async (productId) => {
    const product = await productGetById(productId);
    dispatch({
      type: PRODUCT_ACTIONS.PRODUCT_INFO,
      payload: product.product.data,
    });
  };

  const addProductToList = async (productId) => {
    const product = await productGetById(productId);
    const productsInListPreSaved = state.productsInListPreSaved.some(
      (prod) => prod._id === product.product.data._id
    );

    if (!productsInListPreSaved) {
      return dispatch({
        type: PRODUCT_ACTIONS.LIST_ADD_PRODUCT,
        payload: [
          ...state.productsInListPreSaved,
          {
            ...product.product.data,
            quantity: parseInt(1),
          },
        ],
      });
    }

    const updateProducts = state.productsInListPreSaved.map((prod) => {
      if (prod._id !== product.product.data._id) return prod;

      prod.quantity += 1;
      return prod;
    });

    dispatch({
      type: PRODUCT_ACTIONS.LIST_ADD_PRODUCT,
      payload: updateProducts,
    });
  };

  const updateListQuantity = (product) => {
    dispatch({ type: PRODUCT_ACTIONS.LIST_CHANGE_QUANITY, payload: product });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        listProducts,
        selectProduct,
        addProductToList,
        updateListQuantity,
        addProductToIndexListOnCreate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
