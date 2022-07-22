import React from 'react';
import CardAddItem from '../cards/card-add-item';

const ProductGroupByCategory = ({ products }) => {
	return (
		<div>
			<section>
				<div className='my-10'>
					{products.map(product => {
						return (
							<div key={product.nameCategory} className='mb-12'>
								<h3 className='text-2xl font-semibold text-gray-800 mb-5'>
									{product?.nameCategory}
								</h3>
								<div className='flex flex-wrap gap-5'>
									{product?.products?.map(item => {
										return (
											<CardAddItem
												key={item._id}
												item={item}
											/>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default ProductGroupByCategory;
