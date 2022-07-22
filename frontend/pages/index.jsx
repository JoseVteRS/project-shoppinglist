import {  SearchIcon } from '@heroicons/react/outline';
import {  useState } from 'react';
import ProductFiltersWrapper from '../src/components/filters/product-filters-wrapper';
import ProductList from '../src/components/product/product-list';
import MainLayout from '../src/layouts/main-layout';
import { useProducts } from '../src/lib/hooks/use-products';

export default function Home() {
	const [showGroupFormat, setShowGroupFormat] = useState(false);
	const { products } = useProducts(!showGroupFormat);

	return (
		<MainLayout>
			<div className='w-full flex bg-gray-50 h-full'>
				<section className='w-full p-5'>
					<div className='mb-10 flex items-start justify-between'>
						<h2 className='font-semibold text-4xl w-2/3'>
							<span className='text-yellow-500'>
								Shoppinglist
							</span>{' '}
							allows you take your shopping list wherever you go.
						</h2>
						<div className='w-1/3 relative'>
							<div className='absolute left-3 top-2 translate-y-1/2'>
								<SearchIcon className='stroke-gray-800 w-5 h-5 ' />
							</div>
							<input
								type='text'
								placeholder='search item'
								className='bg-white py-4 px-10 rounded-xl shadow-md shadow-gray-500/10 w-full'
							/>
						</div>
					</div>
					<ProductFiltersWrapper
						showGroupFormat={showGroupFormat}
						setShowGroupFormat={setShowGroupFormat}
					/>
					<ProductList products={products} view={showGroupFormat} />
				</section>
			</div>
		</MainLayout>
	);
}
