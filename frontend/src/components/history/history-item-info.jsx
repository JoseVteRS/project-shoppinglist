import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { getList } from "../../lib/api/lists/get-list";

const LIST_STATE = {
  COMPLETED: "border-sky-500 text-sky-500",
  CANCELLED: "border-red-500 text-red-500",
  IN_PROGRESS: "border-yellow-500 text-yellow-500",
  INIT: "border-gray-500 text-gray-500",
};

const HistoryItemInfo = ({ dataList }) => {
  return (
    <div className="bg-white p-5 mb-8 rounded-xl shadow-md shadow-gray-400/10">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg w-full">{dataList.name}</h3>
        <div className="flex items-center justify-end gap-5 w-full">
          <p className="flex gap-1 items-center text-gray-400 text-sm">
            <CalendarIcon className="w-6" /> {formatDate(dataList.createdAt).date2}
          </p>
          <div
            className={`${
              LIST_STATE[dataList.status]
            } border border-sky-500 text-sky-500 py-1 px-4 rounded-full font-medium text-sm`}
          >
            {dataList.status}
          </div>
          <ChevronRightIcon className="stroke-yellow-500 w-8" />
        </div>
      </div>
    </div>
  );
};

const formatDate = (date) => {
  let newDate = new Date(date);
  return {
    date1: new Date(newDate).toDateString(),
    date2: Intl.DateTimeFormat("de-DE").format(newDate),
  };
};
export default HistoryItemInfo;
