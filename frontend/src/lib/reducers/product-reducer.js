import { PRODUCT_ACTIONS } from "../../constants/actions/product-actions";

export const PRODUCTS_CONTEXT_INITIAL_STATE = {
    productListIndex: [],
    productsInListPreSaved: [],
    productSelected: {},
}

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case PRODUCT_ACTIONS.PRODUCTS_LIST_INDEX:
      return {
        ...state,
        productListIndex: payload,
      };

    case PRODUCT_ACTIONS.PRODUCT_INFO:
        return {
            ...state,
            productSelected: payload
        }

    case PRODUCT_ACTIONS.PRODUCTS_IN_LIST_PRE_SAVED:
      return {
        ...state,
        productsInListPreSaved: [...state.productsInListPreSaved, payload],
      };
    default:
      throw new Error("Type not defined")
  }
};