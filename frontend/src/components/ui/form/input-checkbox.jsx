import { CheckIcon } from '@heroicons/react/outline';

const InputCheckbox = ({ className, ...props }) => (
	<label className={`label ${className || ''}`}>
		<input {...props} type='checkbox' className='input'></input>
		<CheckIcon className='check' />
	</label>
);

export default InputCheckbox;
