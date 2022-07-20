import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import HistoryItemInfo from "../src/components/history/history-item-info";
import StatisticItem from "../src/components/ui/statistic-item";
import MainLayout from "../src/layouts/main-layout";
import { getList } from "../src/lib/api/lists/get-list";

const HistoryPage = () => {
  const [lists, setLists] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const asdf = await getList();
      setLists(asdf);
    };
    fetch();
  }, []);

  return (
    <MainLayout>
      <section className="w-full bg-gray-100 px-12 py-4 h-screen">
        <div>
          <h2 className="font-semibold text-xl mb-6">Shopping history</h2>
        </div>
        {!lists ? (
          <p>Loading lists...</p>
        ) : (
          lists.lists.data.map((item) => <HistoryItemInfo key={item._id} dataList={item} />)
        )}
      </section>
    </MainLayout>
  );
};

export default HistoryPage;
