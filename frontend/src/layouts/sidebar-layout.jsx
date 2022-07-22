import React from 'react';
import AddNewItem from '../components/forms/add-new-item';
import InfoItem from '../components/info-item';
import Resume from '../components/list/resume';
import { UI_PART } from '../constants/ui-parts';

const SidebarLayout = ({ layout }) => {
	if (layout === UI_PART.ADD_ITEM_FORM) return <AddNewItem />;
	if (layout === UI_PART.ITEM_LIST) return <Resume />;
	if (layout === UI_PART.ITEM_INFO) return <InfoItem />;
	else return <Resume />;
};

export default SidebarLayout;
