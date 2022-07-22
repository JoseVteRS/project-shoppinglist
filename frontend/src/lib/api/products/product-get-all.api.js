import { API_URL } from '../../../constants/api';
import { groupProductsByCategories } from '../../group-by';

export const productListAllApi = async (signal, filter) => {
	try {
		if (!filter) {
			const res = await fetch(`${API_URL}/products`, { signal });

			let products;
			if (res.ok) products = await res.json();
			return {
				products: products.data,
				count: 0,
				error: !res.ok,
				aborted: false
			};
		} else {
			const res = await fetch(`${API_URL}/products`, { signal });

			let products;
			if (res.ok) products = await res.json();

			const productsByCategory = groupProductsByCategories(
				products.data,
				'category'
			);

			return {
				products: productsByCategory,
				count: 0,
				error: !res.ok,
				aborted: false
			};
		}
	} catch (error) {
		const isAborted = error.name === 'AbortError';

		return {
			products: undefined,
			count: 0,
			error: !isAborted,
			aborted: isAborted
		};
	}
};
