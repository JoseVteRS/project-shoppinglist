import { useContext, useEffect } from "react";
import CardAddItem from "../src/components/cards/card-add-item";
import MainLayout from "../src/layouts/main-layout";
import SidebarLayout from "../src/layouts/sidebar-layout";
import { productListAllApi } from "../src/lib/api/products/product-get-all.api";
import { productListByCategory } from "../src/lib/api/products/product-get-by-category.api";
import { UIContext } from "../src/lib/context/ui-context";

export default function Home({ data }) {
  const { showPart } = useContext(UIContext);

  // console.log(data.productsByCategory)


  return (
    <MainLayout>
      <div className="w-full flex bg-gray-50">
        <section className="w-9/12 p-5">
          <div className="mb-10 flex items-start justify-between">
            <h2 className="font-semibold text-4xl w-2/3">
              <span className="text-yellow-500">Shoppinglist</span> allows you
              take your shopping list wherever you go.
            </h2>
            <div className="w-1/3 relative">
              {/* <SearchIcon className="stroke-gray-300 w-5 h-5 abosulute left-0 top-0" /> */}

              <input
                type="text"
                placeholder="search item"
                className="bg-white p-4 rounded-xl shadow-md shadow-gray-500/10 w-full"
              />
            </div>
          </div>

          <section>
            <div className="my-10">
              {
                !data ? <p>Cargando...</p> :
                  data.productsByCategory.map(product => {
                    return (
                      <div className="mb-12">
                        <h3 key={product._id} className="text-2xl font-semibold text-gray-800 mb-5">{product._id}</h3>
                        <div className="grid grid-cols-4 gap-5" >
                          {product.docs.map((item) => {
                            return <CardAddItem key={item._id} item={item} />
                          })}
                        </div>
                      </div>
                    )
                  })
              }
            </div>
          </section>
        </section>

        <section className="w-3/12">
          <SidebarLayout layout={showPart} />
        </section>
      </div>
    </MainLayout>
  );
}


export const getServerSideProps = async () => {
  const data = await productListByCategory();

  console.log(data)

  return {
    props: {
      data
    }
  }
}