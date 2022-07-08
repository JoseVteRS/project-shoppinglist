import { PlusIcon } from "@heroicons/react/outline";

const CardAddItem = ({ item }) => {
  const { itemName } = item;
  return (
    <div className="bg-white p-3 rounded-xl flex items-start justify-between text-gray-800 font-medium text-lg w-52 shadow-md shadow-gray-500/20">
      {itemName}
      <button>
        <PlusIcon className="stroke-gray-300 h-6 w-6" />
      </button>
    </div>
  );
};

export default CardAddItem;
