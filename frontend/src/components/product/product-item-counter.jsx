import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline';

const ProductItemCounter = ({
	setIsActive,
	currentValue,
	updatedQuantity,
	maxValue
}) => {
	const addOrRemove = value => {
		if (value === -1) {
			if (currentValue === 1) return;
			return updatedQuantity(currentValue - 1);
		}
		if (currentValue >= maxValue) return;
		updatedQuantity(currentValue + 1);
	};

	return (
		<div className='bg-white flex items-center gap-2 rounded-xl pr-2 '>
			<button className='bg-yellow-600 rounded-xl grid place-content-center h-11 px-2'>
				<TrashIcon className='stroke-white w-4' />
			</button>
			<button onClick={() => addOrRemove(-1)}>
				<MinusIcon className='stroke-yellow-600 h-3 w-3' />
			</button>
			<button
				onClick={() => setIsActive(false)}
				className='rounded-full border-2 border-yellow-600 py-1 px-3 text-xs text-yellow-600 font-semibold'
			>
				{currentValue}pcs
			</button>
			<button onClick={() => addOrRemove(+1)}>
				<PlusIcon className='stroke-yellow-600 h-3 w-3' />
			</button>
		</div>
	);
};

export default ProductItemCounter;
