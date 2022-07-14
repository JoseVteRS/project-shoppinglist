import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const ListItem = ({ item }) => {
  const { name, quantity } = item;

  const [isActive, setIsActive] = useState(false);
 const [plusQuanity, setPlusQuanity] = useState(quantity);

  return (
    <div className="mt-5 flex items-center justify-between">
      <p className="font-semibold text-md">{name}</p>
      {!isActive ? (
        <button
          onClick={() => setIsActive(!isActive)}
          className="rounded-full border-2 border-yellow-600 py-1 px-3 text-yellow-600 text-xs font-semibold"
        >
          {quantity}pcs
        </button>
      ) : (
        <div className="bg-white flex items-center gap-2 rounded-xl pr-2 ">
          <button className="bg-yellow-600 rounded-xl grid place-content-center h-11 px-2">
            <TrashIcon className="stroke-white w-4" />
          </button>
          <button>
            <MinusIcon className="stroke-yellow-600 h-3 w-3" />
          </button>
          <button
            onClick={() => setIsActive(!isActive)}
            className="rounded-full border-2 border-yellow-600 py-1 px-3 text-xs text-yellow-600 font-semibold"
          >
            {plusQuanity}pcs
          </button>
          <button onClick={() => setPlusQuanity(plusQuanity + 1)}>
            <PlusIcon className="stroke-yellow-600 h-3 w-3" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
