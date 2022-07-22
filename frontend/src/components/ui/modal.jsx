import { XIcon } from '@heroicons/react/outline';
import Portal from '../portal';

const Modal = ({ show = false, onClose, children }) => {
	return !show ? null : (
		<Portal>
			<div
				className='bg-gray-800/40 absolute top-0 bottom-0 left-0 right-0'
				onClick={onClose}
			></div>
			<div className='top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 absolute bg-white w-1/3 p-8 rounded-3xl'>
				<div className='w-full flex justify-end '>
					<button
						className='group focus:outline-yellow-400 focus:ouline-offset-2'
						onClick={onClose}
					>
						<XIcon className='w-5 stroke-gray-400 group-focus:stroke-yellow-500' />
					</button>
				</div>
				{children}
			</div>
		</Portal>
	);
};

export default Modal;
