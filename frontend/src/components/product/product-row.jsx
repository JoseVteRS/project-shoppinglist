import React from 'react';
import CardAddItem from '../cards/card-product';

const ProductRow = ({ products }) => {
	console.log(products.data);
	return (
		<section className='flex flex-wrap gap-5'>
			{products.map(product => (
				<CardAddItem item={product} />
			))}
		</section>
	);
};

export default ProductRow;
