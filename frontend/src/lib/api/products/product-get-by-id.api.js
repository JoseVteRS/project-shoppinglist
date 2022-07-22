import { API_URL } from '../../../constants/api';

export const productGetById = async productId => {
	try {
		const res = await fetch(`${API_URL}/product/${productId}`);

		let productItem;
		if (res.ok) productItem = await res.json();
		return {
			product: productItem,
			hasError: false
		};
	} catch (error) {
		return {
			product: undefined,
			hasError: true
		};
	}
};
