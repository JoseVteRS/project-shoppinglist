import { useReducer } from "react";
import { UI_ACTIONS } from "../../constants/actions/ui-actions";
import { UIContext } from "../../lib/context/ui-context";
import { uiAddItemFormReducer, UI_ADD_ITEM_FORM_INITIAL_STATE } from "../../lib/reducers/ui-reducer";

const UIProvider = ({ children }) => {

    const [state, dispatch] = useReducer(uiAddItemFormReducer, UI_ADD_ITEM_FORM_INITIAL_STATE)

    const toggleAddItemForm =()=> {
        dispatch({type: UI_ACTIONS.TOGGLE_ADD_ITEM_MENU})
    }

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleAddItemForm,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
