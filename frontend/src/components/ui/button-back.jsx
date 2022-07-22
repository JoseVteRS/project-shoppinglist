import React from 'react';

const ButtonBack = ({ onBack }) => {
	return (
		<button
			onClick={onBack}
			className='font-semibold text-yellow-500 hover:underline'
		>
			← back
		</button>
	);
};

export default ButtonBack;
