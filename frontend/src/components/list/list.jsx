import { PencilIcon } from "@heroicons/react/outline";
import React from "react";
import { groupProductsByCategories } from "../../lib/group-by";
import ListGroup from "./list-group";
import ListNoHasItem from "./list-no-has-item";

const List = () => {
  return (
    <div className="mt-8 h-96">
      <div className="font-bold text-xl">
        <span>Shopping List </span>
        <button>
          <PencilIcon />
        </button>
      </div>

      <div className="my-10">
        <ListGroup />
      </div>
    </div>
  );
};

export default List;
