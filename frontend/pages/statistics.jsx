import React from 'react'
import StatisticItem from '../src/components/ui/statistic-item';
import MainLayout from '../src/layouts/main-layout'

const StatisticsPage = () => {
  return (
    <MainLayout>
      <section className="w-full bg-gray-100 p-4 h-screen">
        <div>
          <h2 className="font-semibold text-xl mb-6">Top items</h2>
          <StatisticItem
            info={{ itemName: "Banana", itemPercent: 32.5 }}
            color="primary"
          />
          <StatisticItem
            info={{ itemName: "Rice", itemPercent: 47 }}
            color="primary"
          />
          <StatisticItem
            info={{ itemName: "Avocado", itemPercent: 100 }}
            color="primary"
          />
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-6">Top Categories</h2>
          <StatisticItem
            info={{ itemName: "Fruits and vegetables", itemPercent: 23 }}
            color="secondary"
          />
          <StatisticItem
            info={{ itemName: "Meat and Fish", itemPercent: 14 }}
            color="secondary"
          />
          <StatisticItem
            info={{ itemName: "Pets", itemPercent: 11 }}
            color="secondary"
          />
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-10">Monthly Sumamry</h2>
        </div>
      </section>
    </MainLayout>
  );
}

export default StatisticsPage