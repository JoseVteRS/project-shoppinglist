import { useEffect, useState } from 'react';
import {
	LineChart,
	AreaChart,
	Area,
	ReferenceLine,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	Line,
	Legend,
	ResponsiveContainer
} from 'recharts';
import StatisticItem from '../src/components/ui/statistic-item';
import MainLayout from '../src/layouts/main-layout';
import useWindowDimensions from '../src/lib/hooks/use-windows-dimesions';
const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100
	}
];

const StatisticsPage = () => {
	//  const { height, width } = useWindowDimensions();

	return (
		<MainLayout>
			<section className='w-full bg-gray-100 p-4 px-12 h-screen'>
				<div className='flex items-start justify-center w-full flex-wrap'>
					<div className='w-6/12 px-3'>
						<h2 className='font-semibold text-xl mb-6'>
							Top items
						</h2>
						<StatisticItem
							info={{ itemName: 'Banana', itemPercent: 32.5 }}
							color='primary'
						/>
						<StatisticItem
							info={{ itemName: 'Rice', itemPercent: 47 }}
							color='primary'
						/>
						<StatisticItem
							info={{ itemName: 'Avocado', itemPercent: 100 }}
							color='primary'
						/>
					</div>
					<div className='w-6/12 px-3'>
						<h2 className='font-semibold text-xl mb-6'>
							Top Categories
						</h2>
						<StatisticItem
							info={{
								itemName: 'Fruits and vegetables',
								itemPercent: 23
							}}
							color='secondary'
						/>
						<StatisticItem
							info={{
								itemName: 'Meat and Fish',
								itemPercent: 14
							}}
							color='secondary'
						/>
						<StatisticItem
							info={{ itemName: 'Pets', itemPercent: 11 }}
							color='secondary'
						/>
					</div>
				</div>

				<div className='w-full'>
					<h2 className='font-semibold text-xl mb-10'>
						Monthly Sumamry
					</h2>

					<ResponsiveContainer height={400}>
						<LineChart
							data={data}
							margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
						>
							<CartesianGrid strokeDasharray='3 3' />
							<XAxis dataKey='name' />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line
								type='monotone'
								dataKey='pv'
								stroke='#8884d8'
								strokeWidth={2}
							/>
							<Line
								type='monotone'
								dataKey='uv'
								stroke='#82ca9d'
								strokeWidth={2}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</section>
		</MainLayout>
	);
};

export default StatisticsPage;
