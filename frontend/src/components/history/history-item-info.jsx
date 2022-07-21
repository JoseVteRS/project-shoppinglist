import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { listGetById } from "../../lib/api/lists/get-by-id";
import { getList } from "../../lib/api/lists/get-list";
import { formatDate } from "../../lib/format-date";

const LIST_STATE = {
  COMPLETED: "border-sky-500 text-sky-500",
  CANCELLED: "border-red-500 text-red-500",
  IN_PROGRESS: "border-yellow-500 text-yellow-500",
  INIT: "border-gray-500 text-gray-500",
};

const HistoryItemInfo = ({ dataList }) => {
  const onHandleFetch = async (listId) => {
    await listGetById(listId);
  };

  return (
    <div
      className="bg-white p-5 mb-8 rounded-xl shadow-md shadow-gray-400/10"
      onClick={() => onHandleFetch(dataList._id)}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg w-full">{dataList.name}</h3>
        <div className="flex items-center justify-end gap-5 w-full">
          <p className="flex gap-1 items-center text-gray-400 text-sm">
            <CalendarIcon className="w-6" />{" "}
            {formatDate(dataList.createdAt).date2}
          </p>
          <div
            className={`${
              LIST_STATE[dataList.status]
            } border border-sky-500 text-sky-500 py-1 px-4 rounded-full font-medium text-sm`}
          >
            {dataList.status}
          </div>
          <Link href={`/history/${dataList._id}`} >
            <a>
              <ChevronRightIcon className="stroke-yellow-500 w-8" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default HistoryItemInfo;
