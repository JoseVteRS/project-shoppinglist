import React from "react";
import ListItem from "./list-item";

const ListGroup = ({ listItems = [], listFamily = "" }) => {

    listItems = [
      {
        name: "Avocado",
        quantity: 3,
      },
      {
        name: "Pulled pork 1kg",
        quantity: 3,
      },
    ];

  return (
    <div className="mt-12">
      <p className="text-gray-500 font-semibold mb-8">{listFamily}</p>
      {listItems.map((item) => (
        <ListItem key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ListGroup;
