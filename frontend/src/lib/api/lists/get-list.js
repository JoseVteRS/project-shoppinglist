import { API_URL } from '../../../constants/api';

export const findAllLists = async signal => {
	try {
		const res = await fetch(`${API_URL}/lists`, { signal });
		let lists;
		if (res.ok) lists = await res.json();

		return {
			lists: lists.data,
			count: 0,
			error: !res.ok,
			aborted: false
		};
	} catch (error) {
		const isAborted = error.name === 'AbortError';
		return {
			lists: undefined,
			count: 0,
			error: !isAborted,
			aborted: isAborted
		};
	}
};
