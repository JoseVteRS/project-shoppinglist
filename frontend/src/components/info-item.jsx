import { useContext } from "react";
import { UI_PART } from "../constants/ui-parts";
import { ProductContext } from "../lib/context/product-context";
import { UIContext } from "../lib/context/ui-context";

const InfoItem = () => {
  const { showUiPart } = useContext(UIContext);
  const { productSelected, addProductToList } = useContext(ProductContext);


  return (
    <div className="bg-white h-full p-8">
      <button
        onClick={() => showUiPart(UI_PART.ITEM_LIST)}
        className="font-semibold text-yellow-500 hover:underline"
      >
        ← back
      </button>
      <div className="rounded-xl overflow-hidden mt-8 ">
        <img
          className="w-full"
          src="https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/rs7776_thinkstockphotos-856586464_1-low.jpg?itok=zHdfQ6Ij"
          alt=""
        />
      </div>
      <div>
        <div className="my-8">
          <p className="text-gray-400 font-medium text-sm mb-2">name</p>
          <p className="text-gray-800 font-medium">{productSelected.name}</p>
        </div>
        <div className="my-8">
          <p className="text-gray-400 font-medium text-sm mb-2">note</p>
          {!productSelected?.note ? (
            <p className="text-gray-400 italic text-sm">No description</p>
          ) : (
            <p className="text-gray-800 font-medium">{productSelected?.note}</p>
          )}
        </div>
        <div className="flex gap-4 items-center justify-around">
          <button className="font-semibold text-gray-800">delete</button>
          <button
            onClick={() => addProductToList(productSelected)}
            className="bg-yellow-500 hover:bg-yellow-600 p-3 rounded-md font-semibold text-white"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoItem;
