import { UI_ACTIONS } from "../../constants/actions/ui-actions";


export const UI_ADD_ITEM_FORM_INITIAL_STATE = {
    isActive: false
}

export const uiAddItemFormReducer  = (state, {type, payload}) => {
    switch (type) {
        case UI_ACTIONS.TOGGLE_ADD_ITEM_MENU:       
            return {
                ...state,
                isActive: !state.isActive
            }
    
        default:
            throw new Error("Invalid action type");
    }
}