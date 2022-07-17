import React, { useContext } from "react";
import { ProductContext } from "../../lib/context/product-context";
import { UIContext } from "../../lib/context/ui-context";
import AddItem from "../add-item";
import List from "./list";
import ListNoHasItem from "./list-no-has-item";

const Resume = () => {
  const { productsInListPreSaved } = useContext(ProductContext);
  const { isShowedEditList } = useContext(UIContext);

  const hasProducts = (productsInListPreSaved.length !== 0);


  return (
    <div className="w-full sticky top-0 ">
      <div className="bg-orange-100 p-5 h-[90vh] overflow-y-scroll">
        <AddItem />

        {hasProducts ? <List /> : <ListNoHasItem />}
      </div>

      <div className="bg-white h-[10vh] w-full p-2 flex items-center justify-center ">
        <div className="relative">
          {
            !isShowedEditList ? (
              <>
                <input
                  disabled={!hasProducts}
                  type="text"
                  placeholder="Enter a name"
                  className="disabled:border-gray-400 border-2 border-yellow-500 rounded-xl p-4 pr-24 w-full focus:shadow-md focus:outline-none"
                />
                <button
                  disabled={!hasProducts}
                  className="absolute right-0 top-0 bg-yellow-500 rounded-xl focus:shadow-md text-white py-4 px-6 font-medium border-2 border-yellow-500 disabled:bg-gray-400"
                >
                  Save
                </button>

              </>


            )
              : (

                <div className="flex items-center justify-between">
                  <button
                    disabled={!hasProducts}
                    className=" right-0 top-0  text-gray-800 py-4 px-6 font-medium"
                  >
                    cancel
                  </button>
                  <button
                    disabled={!hasProducts}
                    className=" right-0 top-0 bg-sky-400 rounded-xl focus:shadow-md text-white py-4 px-6 font-medium border-2 border-sky-400 disabled:bg-gray-400"
                  >
                    Complete
                  </button>
                </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Resume;
