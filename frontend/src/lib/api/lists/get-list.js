import { API_URL } from '../../../constants/api';

export const getList = async () => {
	try {
		const res = await fetch(`${API_URL}/lists`);
		let lists;
		if (res.ok) lists = await res.json();

		return {
			hasError: false,
			lists
		};
	} catch (error) {
		return {
			hasError: true,
			error: error.message
		};
	}
};
