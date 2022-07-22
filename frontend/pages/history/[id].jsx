import { useRouter } from 'next/router';
import { CalendarIcon } from '@heroicons/react/outline';
import ButtonBack from '../../src/components/ui/button-back';
import MainLayout from '../../src/layouts/main-layout';
import { listGetById } from '../../src/lib/api/lists/get-by-id';
import { formatDate } from '../../src/lib/format-date';
import { groupProductsByCategoriesFromList } from '../../src/lib/group-by';

const HistoryItemPage = ({ list }) => {
	const router = useRouter();

	const productsFromListGrouped = groupProductsByCategoriesFromList(
		list.products,
		'product'
	);

	return (
		<MainLayout>
			<div className='px-12 py-8 bg-gray-100 h-full'>
				<ButtonBack onBack={() => router.back()} />
				<h2 className='mt-12 font-bold text-2xl'>{list.name}</h2>
				<p className='text-gray-400 text-sm mt-2 flex gap-3 items-center '>
					<CalendarIcon className='h-5' />
					{formatDate(list.createdAt).date2}
				</p>

				<div className='mt-12'>
					{productsFromListGrouped.map(product => {
						console.log(product);
						return (
							<div key={product.nameCategory} className='mt-12'>
								<p className='font-semibold text-xl'>
									{product.nameCategory}
								</p>
								<div className='flex flex-wrap gap-4 mt-1'>
									{product?.products?.map(item => {
										return (
											<div
												key={item.product._id}
												className='bg-white shadow p-2 rounded-xl flex gap-5'
											>
												{item.product.name}
												<span className='text-yellow-500 text-xs items-start justify-between'>
													{item.quantity}pcs
												</span>
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</MainLayout>
	);
};

export const getServerSideProps = async ctx => {
	const list = await listGetById(ctx.query.id);

	return {
		props: {
			list: list.data
		}
	};
};

export default HistoryItemPage;
