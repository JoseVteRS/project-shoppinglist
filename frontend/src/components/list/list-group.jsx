import React from "react";
import { groupProductsByCategories } from "../../lib/group-by";
import ListItem from "./list-item";

// TODO: Context?
let listItems = [
  {
    name: "Avocado",
    quantity: 3,
    category: {
      _id: "1",
      name: "Vegetales",
    },
  },
  {
    name: "Pulled pork 1kg",
    quantity: 3,
    category: {
      _id: "2",
      name: "Carne",
    },
  },
  {
    name: "Burguer",
    quantity: 6,
    category: {
      _id: "2",
      name: "Carne",
    },
  },
  {
    name: "Avena",
    quantity: 1,
    category: {
      _id: "3",
      name: "Cereales",
    },
  },
  {
    name: "Menestra de verdura",
    quantity: 1,
    category: {
      _id: "1",
      name: "Vegetales",
    },
  },
  {
    name: "Pulled pork 1kg",
    quantity: 3,
    category: {
      _id: "2",
      name: "Carne",
    },
  },
  {
    name: "Burguer",
    quantity: 6,
    category: {
      _id: "2",
      name: "Carne",
    },
  },
  {
    name: "Avena",
    quantity: 1,
    category: {
      _id: "3",
      name: "Cereales",
    },
  },
  {
    name: "Tomates",
    quantity: 3,
    category: {
      _id: "1",
      name: "Vegetales",
    },
  },
  {
    name: "Pulled pork 1kg",
    quantity: 3,
    category: {
      _id: "2",
      name: "Carne",
    },
  },
  {
    name: "Burguer",
    quantity: 6,
    category: {
      _id: "2",
      name: "Carne",
    },
  },
  {
    name: "Avena",
    quantity: 1,
    category: {
      _id: "3",
      name: "Cereales",
    },
  },
];

const ListGroup = () => {
  let products = groupProductsByCategories(listItems, "category");

  return (
    <div className="mt-12">
      {products.map((item) => {
        return (
          <>
            <p className="text-gray-500 font-semibold mt-8">
              {item[0].nameCategory}
            </p>
            {item[1]?.products?.map((item) => {
              return <ListItem item={item} />;
            })}
          </>
        );
      })}
    </div>
  );
};

export default ListGroup;
