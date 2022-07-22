import { useContext } from 'react';
import Navbar from '../components/navbar/navbar';
import { UIContext } from '../lib/context/ui-context';
import SidebarLayout from './sidebar-layout';

const MainLayout = ({ children }) => {
	const { showPart } = useContext(UIContext);

	return (
		<div className=' min-h-screen w-screen flex '>
			<aside className='w-2/12 md:w-20'>
				<Navbar />
			</aside>
			<main className='w-full'>{children}</main>
			<aside className='w-4/12'>
				<SidebarLayout layout={showPart} />
			</aside>
		</div>
	);
};

export default MainLayout;
