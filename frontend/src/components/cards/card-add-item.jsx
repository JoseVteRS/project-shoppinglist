import { PlusIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { UI_PART } from "../../constants/ui-parts";
import { UIContext } from "../../lib/context/ui-context";

const CardAddItem = ({ item }) => {
  const { showUiPart } = useContext(UIContext);
  const { itemName } = item;

  return (
    <div className="bg-white p-3 rounded-xl flex gap-5 items-start justify-between text-gray-800 font-medium text-lg  shadow-md shadow-gray-500/20 h-min">
      {itemName}
      <button onClick={() => showUiPart(UI_PART.ITEM_INFO)}>
        <PlusIcon className="stroke-gray-300 h-6 w-6" />
      </button>
    </div>
  );
};

export default CardAddItem;
