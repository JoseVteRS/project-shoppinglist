import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../lib/context/product-context";
import ProductItemCounter from "../product/product-item-counter";

const ListItem = ({ item }) => {
  const { updateListQuantity } =
    useContext(ProductContext);
  const { name, quantity } = item;
  const [isActive, setIsActive] = useState(false);

  const onNewListQuantityValue = (product, newQuantityValue) => {
    product.quantity = newQuantityValue;
    updateListQuantity(product);
  };

  return (
    <div className="flex items-center justify-between">
      <p className="font-semibold text-xl py-3">{name}</p>
      {!isActive ? (
        <button
          onClick={() => setIsActive(!isActive)}
          className="rounded-full border-2 border-yellow-600 py-1 px-3 text-yellow-600 text-xs font-semibold"
        >
          {quantity}pcs
        </button>
      ) : (
        <ProductItemCounter
          setIsActive={setIsActive}
          currentValue={quantity}
          maxValue={99}
          updatedQuantity={(value) => onNewListQuantityValue(item, value)}
        />
      )}
    </div>
  );
};

export default ListItem;
