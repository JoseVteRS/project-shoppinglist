import { useReducer } from 'react';
import { UI_ACTIONS } from '../../constants/actions/ui-actions';
import { UIContext } from '../../lib/context/ui-context';
import {
	uiAddItemFormReducer,
	UI_ADD_ITEM_FORM_INITIAL_STATE
} from '../../lib/reducers/ui-reducer';

const UIProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		uiAddItemFormReducer,
		UI_ADD_ITEM_FORM_INITIAL_STATE
	);

	const showUiPart = payload => {
		dispatch({ type: UI_ACTIONS.UI_PART, payload });
	};

	const handleShowEditList = payload => {
		dispatch({ type: UI_ACTIONS.UI_EDIT_LIST });
	};

	return (
		<UIContext.Provider
			value={{
				...state,
				showUiPart,
				handleShowEditList
			}}
		>
			{children}
		</UIContext.Provider>
	);
};

export default UIProvider;
