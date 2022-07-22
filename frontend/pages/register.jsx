import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../src/components/ui/form/input';

const RegisterPage = () => {
	const { register } = useForm();

	return (
		<main className='bg-orange-100 h-screen w-full'>
			<div className=' h-full w-full flex items-center justify-center'>
				<div className='bg-white w-6/12 p-5 rounded-xl shadow-md'>
					<p className='font-bold text-center mb-10 text-3xl'>
						Register
					</p>
					<form>
						<Input
							title='Name'
							label='username'
							placeholder='John Doe'
							register={register}
						/>
						<Input
							title='Email'
							label='email'
							placeholder='johndoe@email.com'
							register={register}
						/>
						<Input
							type='password'
							title='Password'
							label='password'
							placeholder='Your secret password'
							register={register}
						/>

						<button className='bg-yellow-500 py-2 px-4 rounded-md font-medium text-white  hover:shadow-yellow-500/30 hover:shadow-lg focus:outline-yellow-500 focus:outline-offset-4'>
							Register me!
						</button>
					</form>
					<div className='mt-12'>
						Have you an account already?
						<Link href='/login'>
							<a> Click here</a>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default RegisterPage;
