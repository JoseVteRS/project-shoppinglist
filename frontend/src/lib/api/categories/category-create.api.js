import { API_URL } from '../../../constants/api';

export const categoryCreate = async data => {
	try {
		await fetch(`${API_URL}/category/create`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	} catch (error) {
		return {
			categories: undefined,
			hasError: true
		};
	}
};
