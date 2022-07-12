import { PRODUCT_ACTIONS } from "../../constants/actions/product-actions";

export const PRODUCTS_CONTEXT_INITIAL_STATE = {
    productListIndex: [],
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
    default:
      throw new Error("Type not defined")
  }
};