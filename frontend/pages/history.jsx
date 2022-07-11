import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import HistoryItemInfo from "../src/components/history/history-item-info";
import StatisticItem from "../src/components/ui/statistic-item";
import MainLayout from "../src/layouts/main-layout";

const HistoryPage = () => {
  return (
    <MainLayout>
      <section className="w-full bg-gray-100 px-12 py-4 h-screen">
        <div>
          <h2 className="font-semibold text-xl mb-6">Shopping history</h2>
        </div>
        <article className="mb-16">
          <date className="font-medium mb-2 block">August 2022</date>
          <HistoryItemInfo />
          <HistoryItemInfo />
        </article>
        <article className="mb-16">
          <date className="font-medium mb-2 block">August 2022</date>
          <HistoryItemInfo />
        </article>
      </section>
    </MainLayout>
  );
};

export default HistoryPage;
