import { ViewBoardsIcon, ViewGridIcon } from "@heroicons/react/outline";
import React from "react";

const ProductFiltersWrapper = ({showGroupFormat, setShowGroupFormat}) => {
  return (
    <div className="my-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowGroupFormat(false)}
          disabled={!showGroupFormat}
          className="group disabled:bg-neutral-200 hover:shadow-md p-2 rounded-lg"
        >
          <ViewGridIcon className="w-5 group-disabled:stroke-neutral-700" />
        </button>
        <div className="border border-neutral-300 h-6 w-px" />
        <button
          onClick={() => setShowGroupFormat(true)}
          disabled={showGroupFormat}
          className="group disabled:bg-neutral-200 hover:shadow-md p-2 rounded-lg"
        >
          <ViewBoardsIcon className="w-5 group-disabled:stroke-neutral-700" />
        </button>
      </div>
    </div>
  );
};

export default ProductFiltersWrapper;
