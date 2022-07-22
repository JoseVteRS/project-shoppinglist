import { API_URL } from '../../../constants/api';

export const listGetById = async listId => {
	try {
		const res = await fetch(`${API_URL}/lists/${listId}`);

		let list;
		if (res.ok) list = await res.json();

		return list;
	} catch (error) {
		return {
			error: error.message
		};
	}
};
