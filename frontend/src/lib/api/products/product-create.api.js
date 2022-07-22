import { API_URL } from '../../../constants/api';

export const productCreateApi = async (newProductData, onSuccess) => {
	let isLoading = true;
	try {
		const res = await fetch(`${API_URL}/product/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newProductData)
		});

		if (res.ok) {
			onSuccess();
		}
		isLoading = false;
	} catch (error) {
		return {
			error: error.message
		};
	} finally {
		isLoading = false;
	}
};
