import { useEffect, useState } from 'react';
import { productListAllApi } from '../api/products/product-get-all.api';

export const useProducts = filters => {
	const [products, setProducts] = useState({
		data: [],
		count: 0,
		error: false,
		loading: true
	});

	const setData = (newData, newCount) =>
		setProducts({
			data: newData,
			count: newCount,
			loading: false,
			error: false
		});

	const setError = () =>
		setProducts({ data: [], count: 0, loading: false, error: true });

	useEffect(() => {
		const controller = new AbortController();

		loadProducts(setData, setError, controller.signal, filters);

		return () => controller.abort();
	}, [filters]);

	return {
		products: products.data,
		totalProducts: products.count,
		productsError: products.error,
		productsLoading: products.loading
	};
};

const loadProducts = async (setData, setError, signal, filters) => {
	const { products, count, aborted } = await productListAllApi(
		signal,
		filters
	);

	if (aborted) return;
	if (products) setData(products, count);
	else setError();
};
