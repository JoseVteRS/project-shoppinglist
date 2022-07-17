import { UI_ACTIONS } from "../../constants/actions/ui-actions";
import { UI_PART } from "../../constants/ui-parts";

export const UI_ADD_ITEM_FORM_INITIAL_STATE = {
  showPart: UI_PART.ITEM_LIST,
  isShowedEditList: false,
};

export const uiAddItemFormReducer = (state, { type, payload }) => {
  switch (type) {
    case UI_ACTIONS.UI_PART:
      return {
        ...state,
        showPart: payload,
      };

    case UI_ACTIONS.UI_EDIT_LIST:
      return {
        ...state,
        isShowedEditList: !state.isShowedEditList
      }

    default:
      throw new Error("Invalid action type");
  }
};
