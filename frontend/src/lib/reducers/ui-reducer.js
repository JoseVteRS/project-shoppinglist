import { UI_ACTIONS } from "../../constants/actions/ui-actions";
import { UI_PART } from "../../constants/ui-parts";

export const UI_ADD_ITEM_FORM_INITIAL_STATE = {
  showPart: UI_PART.ITEM_LIST,
};

export const uiAddItemFormReducer = (state, { type, payload }) => {
  switch (type) {
    case UI_ACTIONS.UI_PART:
      return {
        ...state,
        showPart: payload,
      };

    default:
      throw new Error("Invalid action type");
  }
};
