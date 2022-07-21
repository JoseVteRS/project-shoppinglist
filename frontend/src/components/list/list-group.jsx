import React, { Fragment, useContext } from "react";
import { ProductContext } from "../../lib/context/product-context";
import { groupProductsByCategories } from "../../lib/group-by";
import ListItem from "./list-item";


const ListGroup = () => {
  const { productsInListPreSaved } = useContext(ProductContext);
  let products = groupProductsByCategories(productsInListPreSaved, "category");


  return (
    <div className="mt-12">
      {products.map((item) => {
        return (
          <Fragment key={item._id}>
            <p className="text-gray-500 font-semibold mt-8">
              {item[0].nameCategory}
            </p>
            {item[1]?.products?.map((item) => {
              return <ListItem key={item._id} item={item} />;
            })}
          </Fragment>
        );
      })}
    </div>
  );
};

export default ListGroup;
