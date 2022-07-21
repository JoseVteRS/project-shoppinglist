import { ViewBoardsIcon, ViewGridIcon } from "@heroicons/react/outline";
import React from "react";

const ProductFiltersWrapper = () => {
  return (
    <div className="my-8 bg-white p-5 shadow-md rounded-xl">
      <div className="flex items-center gap-3" >
        <button className="bg-neutral-200 hover:shadow-md p-2 rounded-lg">
          <ViewGridIcon className="w-5 stroke-neutral-700" />
        </button>
        <button className="bg-neutral-200 hover:shadow-md p-2 rounded-lg">
          <ViewBoardsIcon className="w-5 stroke-neutral-700" />
        </button>
      </div>
    </div>
  );
};

export default ProductFiltersWrapper;
