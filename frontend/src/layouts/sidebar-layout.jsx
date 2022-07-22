import React from 'react';
import AddNewItem from '../components/forms/add-new-item';
import InfoItem from '../components/info-item';
import Resume from '../components/list/resume';

const LAYOUT = {
	ADD_ITEM_FORM: AddNewItem,
	ITEM_LIST: Resume,
	ITEM_INFO: InfoItem
};

const SidebarLayout = ({ layout }) => {
	const LayoutToRender = LAYOUT[layout];
	return (
		<div className='w-full sticky top-0 '>
			<LayoutToRender />
		</div>
	);
};

export default SidebarLayout;
