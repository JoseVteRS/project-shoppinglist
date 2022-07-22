import React, { useEffect, useState } from 'react';
import HistoryItemInfo from '../../src/components/history/history-item-info';
import MainLayout from '../../src/layouts/main-layout';
import { getList } from '../../src/lib/api/lists/get-list';
import { useLists } from '../../src/lib/hooks/use-lists';

const HistoryPage = () => {
	const { lists, listsError, listsLoading } = useLists();

	return (
		<MainLayout>
			<section className='w-full bg-gray-100 px-12 py-4 h-screen'>
				<div>
					<h2 className='font-semibold text-xl mb-6'>
						Shopping history
					</h2>
				</div>
				{listsError && <p>Error to load lists</p>}
				{listsLoading ? (
					<p>Loading lists...</p>
				) : (
					lists.map(item => (
						<HistoryItemInfo key={item._id} dataList={item} />
					))
				)}
			</section>
		</MainLayout>
	);
};

export default HistoryPage;
