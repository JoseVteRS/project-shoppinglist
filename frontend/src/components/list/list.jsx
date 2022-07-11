import React from "react";
import ListGroup from "./list-group";

let listItems = [
  {
    name: "Avocado",
    quantity: 3,
  },
  {
    name: "Pulled pork 1kg",
    quantity: 2,
  },
  {
    name: "Pulled pork 1kg",
    quantity: 2,
  },
];

const List = () => {
  listItems = undefined;
  return (
    <div className="mt-8 h-96">
      {listItems ? (
        <>
          <p className="font-bold text-xl">Shopping List</p>

          <div className="my-10">
            <ListGroup
              listFamily="Frutis and Vegetables"
              listItems={listItems}
            />
            <ListGroup listFamily="Meat and fish" listItems={listItems} />
            <ListGroup listFamily="Lista personalizada" listItems={listItems} />
            <ListGroup listFamily="Meat and fish" listItems={listItems} />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-between h-full">
          <p className="font-bold text-xl">No items</p>
          <div>
            <img src="/undraw-cart.svg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
