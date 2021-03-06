import React, { useContext } from 'react';
import { ProductContext } from '../../lib/context/product-context';
import CreateProduct from '../create-product';
import List from './list';
import ListNoHasItem from './list-no-has-item';

const EditResume = () => {
	const { productsInListPreSaved } = useContext(ProductContext);
	const hasProducts = productsInListPreSaved.length !== 0;

	return (
		<div className='w-full sticky top-0 '>
			<div className='bg-orange-100 p-5 h-[90vh] overflow-y-scroll'>
				<CreateProduct />

				{hasProducts ? <List /> : <ListNoHasItem />}
			</div>

			<div className='bg-white w-full p-2 flex items-center justify-center '>
				<div className='relative'>
					<input
						disabled={!hasProducts}
						type='text'
						placeholder='Enter a name'
						className='disabled:border-gray-400 border-2 border-yellow-600 rounded-xl p-4 pr-24 w-full'
					/>
					<button
						disabled={!hasProducts}
						className='absolute right-0 top-0 bg-yellow-600 rounded-xl text-white py-4 px-6 font-medium border-2 border-transparent disabled:bg-gray-400 border-gray-400'
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditResume;
