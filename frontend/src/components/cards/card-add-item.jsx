import { PlusIcon } from '@heroicons/react/outline';
import { useContext } from 'react';
import { UI_PART } from '../../constants/ui-parts';
import { UIContext } from '../../lib/context/ui-context';
import { ProductContext } from '../../lib/context/product-context';

const CardAddItem = ({ item }) => {
	const { showUiPart } = useContext(UIContext);
	const { selectProduct, addProductToList } = useContext(ProductContext);

	const { name, _id } = item;

	const handleSeletectProductAndChangeScreen = productId => {
		selectProduct(productId);
		showUiPart(UI_PART.ITEM_INFO);
	};

	return (
		<div className='flex shadow-md rounded-xl '>
			<div
				onClick={() => handleSeletectProductAndChangeScreen(_id)}
				className='bg-white  rounded-l-xl p-2 hover:cursor-pointer hover:bg-gray-100'
			>
				<p className='grid h-8 place-content-center'>{name}</p>
			</div>

			<button
				onClick={() => addProductToList(item)}
				className='bg-white rounded-r-xl  grid h-full place-content-center  hover:bg-yellow-500 p-2  cursor-pointer group'
			>
				<PlusIcon className='stroke-gray-300 h-4 w-4 group-hover:stroke-gray-100' />
			</button>
		</div>
	);
};

export default CardAddItem;
