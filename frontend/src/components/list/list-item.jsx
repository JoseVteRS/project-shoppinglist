import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const ListItem = ({ item }) => {
  const { name, quantity } = item;

  const [isActive, setIsActive] = useState(false);
 const [plusQuanity, setPlusQuanity] = useState(quantity);

  return (
    <div className="mt-5 flex items-center justify-between">
      <p className="font-semibold">{name}</p>
      {!isActive ? (
        <button
          onClick={() => setIsActive(!isActive)}
          className="rounded-full border-2 border-yellow-600 py-1 px-6 text-yellow-600 font-semibold"
        >
          {quantity}pcs
        </button>
      ) : (
        <div className="bg-white flex items-center gap-2 rounded-xl pr-2">
          <button className="bg-yellow-600 rounded-xl grid place-content-center py-3 px-6">
            <TrashIcon className="stroke-white h-4 w-4" />
          </button>
          <button>
            <MinusIcon className="stroke-yellow-600 h-5 w-5" />
          </button>
          <button
            onClick={() => setIsActive(!isActive)}
            className="rounded-full border-2 border-yellow-600 py-1 px-6 text-yellow-600 font-semibold"
          >
            {plusQuanity}pcs
          </button>
          <button onClick={() => setPlusQuanity(plusQuanity + 1)}>
            <PlusIcon className="stroke-yellow-600 h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
