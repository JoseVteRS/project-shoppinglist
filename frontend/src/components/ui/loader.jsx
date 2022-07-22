import { RefreshIcon } from '@heroicons/react/outline';
import React from 'react';

const Loader = () => (
	<div className='h-full w-full grid place-content-center'>
		<RefreshIcon className='animate-spin h-12 w-12 stroke-neutral-800' />
	</div>
);

export default Loader;
