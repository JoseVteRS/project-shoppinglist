import { PencilIcon } from '@heroicons/react/outline';
import React, { useContext } from 'react';
import { UIContext } from '../../lib/context/ui-context';
import ListGroup from './list-group';

const List = () => {
	const { handleShowEditList } = useContext(UIContext);

	return (
		<div className='mt-8 h-96'>
			<div className='font-bold text-xl flex items-center justify-between'>
				<p>Shopping List</p>
				<button onClick={handleShowEditList}>
					<PencilIcon className='stroke-gray-800 w-6' />
				</button>
			</div>

			<div className='my-10'>
				<ListGroup />
			</div>
		</div>
	);
};

export default List;
