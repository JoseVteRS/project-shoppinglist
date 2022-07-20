import { RefreshIcon, SearchIcon } from "@heroicons/react/outline";
import { useContext, useEffect, useState } from "react";
import CardAddItem from "../src/components/cards/card-add-item";
import MainLayout from "../src/layouts/main-layout";

import { ProductContext } from "../src/lib/context/product-context";
import { groupProductsByCategories } from "../src/lib/group-by";

export default function Home() {
  const { productListIndex, listProducts } = useContext(ProductContext);

  useEffect(() => {
    listProducts();
  }, []);
  

  const productsByCategory = groupProductsByCategories(
    productListIndex,
    "category"
  );

  return (
    <MainLayout>
      <div className="w-full flex bg-gray-50 h-full">
        <section className="w-full p-5">
          <div className="mb-10 flex items-start justify-between">
            <h2 className="font-semibold text-4xl w-2/3">
              <span className="text-yellow-500">Shoppinglist</span> allows you
              take your shopping list wherever you go.
            </h2>

            <div className="w-1/3 relative">
              <div className="absolute left-3 top-2 translate-y-1/2">
                <SearchIcon className="stroke-gray-800 w-5 h-5 " />
              </div>

              <input
                type="text"
                placeholder="search item"
                className="bg-white py-4 px-10 rounded-xl shadow-md shadow-gray-500/10 w-full"
              />
            </div>
          </div>
          <button onClick={listProducts} className="bg-gray-200 rounded-lg hover:shadow-md">
            <RefreshIcon className="h-4 m-3 stroke-gray-800" />
          </button>
          <section>
            <div className="my-10">
              {!productsByCategory ? (
                <p>Cargando...</p>
              ) : (
                productsByCategory.map((product) => {
                  return (
                    <div key={product._id} className="mb-12">
                      <h3
                        key={product._id}
                        className="text-2xl font-semibold text-gray-800 mb-5"
                      >
                        {product[0].nameCategory}
                      </h3>
                      <div className="flex flex-wrap gap-5">
                        {product[1].products.map((item) => {
                          return <CardAddItem key={item._id} item={item} />;
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </section>
        {/* 
        <section className="w-3/12">
          <SidebarLayout layout={showPart} />
        </section> */}
      </div>
    </MainLayout>
  );
}
