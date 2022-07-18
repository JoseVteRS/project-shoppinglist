import { PRODUCT_ACTIONS } from "../../constants/actions/product-actions";

export const PRODUCTS_CONTEXT_INITIAL_STATE = {
  productListIndex: [],
  productsInListPreSaved: [],
  productSelected: {},
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case PRODUCT_ACTIONS.PRODUCTS_LIST_INDEX:
      return {
        ...state,
        productListIndex: payload,
      };

    case PRODUCT_ACTIONS.PRODUCT_ADD_TO_INDEX_ON_CREATE:
      return {
        ...state,
        productListIndex: [...payload],
      };

    case PRODUCT_ACTIONS.PRODUCT_INFO:
      return {
        ...state,
        productSelected: payload,
      };

    case PRODUCT_ACTIONS.LIST_ADD_PRODUCT:
      return {
        ...state,
        productsInListPreSaved: [...payload],
      };

    case PRODUCT_ACTIONS.LIST_CHANGE_QUANITY:
      return {
        ...state,
        productsInListPreSaved: state.productsInListPreSaved.map((product) => {
          if (product !== product._id) return product;
          return payload;
        }),
      };

    default:
      throw new Error("Type not defined");
  }
};
