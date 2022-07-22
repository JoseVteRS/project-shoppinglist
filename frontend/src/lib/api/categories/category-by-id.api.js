import { API_URL } from '../../../constants/api';

export const categoryGetById = async categoryId => {
	try {
		const res = await fetch(`${API_URL}/category/${categoryId}`);

		let categoryItem;
		if (res.ok) categoryItem = await res.json();
		return {
			category: categoryItem,
			hasError: false
		};
	} catch (error) {
		return {
			category: undefined,
			hasError: true
		};
	}
};
