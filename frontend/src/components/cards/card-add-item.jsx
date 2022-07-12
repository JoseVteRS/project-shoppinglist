import { PlusIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { UI_PART } from "../../constants/ui-parts";
import { UIContext } from "../../lib/context/ui-context";
import { ProductContext } from "../../lib/context/product-context";

const CardAddItem = ({ item }) => {
  const { showUiPart } = useContext(UIContext);
  const { selectProduct } = useContext(ProductContext);
  const { name, _id } = item;

  const handleSeletectProductAndChangeScreen =(productId)=> {
    selectProduct(productId);
    showUiPart(UI_PART.ITEM_INFO)
  }

  return (
    <div className="bg-white p-3 rounded-xl flex gap-5 items-start justify-between text-gray-800 font-medium text-lg  shadow-md shadow-gray-500/20 h-min">
      {name}
      <button onClick={() => handleSeletectProductAndChangeScreen(_id)}>
        <PlusIcon className="stroke-gray-300 h-6 w-6" />
      </button>
    </div>
  );
};

export default CardAddItem;
