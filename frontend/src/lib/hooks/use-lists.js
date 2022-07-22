import { useEffect, useState } from 'react';
import { findAllLists } from '../api/lists/get-list';

export const useLists = () => {
	const [lists, setLists] = useState({
		data: [],
		count: 0,
		error: false,
		loading: true
	});

	const setData = (newData, newCount) =>
		setLists({
			data: newData,
			count: newCount,
			loading: false,
			error: false
		});

	const setError = () =>
		setLists({ data: [], count: 0, loading: false, error: true });

	useEffect(() => {
		const controller = new AbortController();

		loadLists(setData, setError, controller.signal);
		return () => controller.abort();
	}, []);

	return {
		lists: lists.data,
		totalLists: lists.count,
		listsError: lists.error,
		listsLoading: lists.loading
	};
};

const loadLists = async (setData, setError, signal) => {
	const { lists, count, aborted } = await findAllLists(signal);

	if (aborted) return;
	if (lists) setData(lists, count);
	else setError();
};
