

import React from 'react'
import ListGroup from './list-group';

const listItems = [
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
  return (
    <div className="mt-8">
      <p className="font-bold text-xl">Shopping List</p>

      <div className="my-10">
        <ListGroup listFamily="Frutis and Vegetables" listItems={listItems} />
        <ListGroup listFamily="Meat and fish" listItems={listItems} />
        <ListGroup listFamily="Lista personalizada" listItems={listItems} />
        <ListGroup listFamily="Meat and fish" listItems={listItems} />
      </div>
    </div>
  );
}

export default List