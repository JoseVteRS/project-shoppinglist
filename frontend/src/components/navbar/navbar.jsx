import Link from "next/link";
import { useRouter } from "next/router";
import {
  ViewListIcon,
  RefreshIcon,
  ChartSquareBarIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useContext } from "react";
import { ProductContext } from "../../lib/context/product-context";

const Navbar = () => {
  const { productsInListPreSaved } = useContext(ProductContext);
  const router = useRouter();
  const isActiveRoute = (actualRoute) => router.pathname === actualRoute;

  return (
    <div className="bg-white min-h-screen sticky left-0  top-0">
      <nav className="flex gap-12 flex-col items-center justify-between min-h-screen py-5">
        {/* <img className="w-2/3" src="/logo.svg" alt="Logo shoppinglist" /> */}

        <div className="flex gap-12 flex-col items-center w-full">
          <Link href="/">
            <div className="w-full grid place-content-center relative">
              {isActiveRoute("/") && (
                <div className="bg-yellow-600 w-2 h-16 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-r-md" />
              )}

              <ViewListIcon className="h-6 w-6 text-gray-800" />
            </div>
          </Link>

          <Link href="/history">
            <div className="w-full grid place-content-center relative">
              {isActiveRoute("/history") && (
                <div className="bg-yellow-600 w-2 h-16 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-r-md" />
              )}
              <RefreshIcon className="h-6 w-6 text-gray-800" />
            </div>
          </Link>

          <Link href="/statistics">
            <div className="w-full grid place-content-center relative">
              {isActiveRoute("/statistics") && (
                <div className="bg-yellow-600 w-2 h-16 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-r-md" />
              )}
              <ChartSquareBarIcon className="h-6 w-6 text-gray-800" />
            </div>
          </Link>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-600 grid place-content-center">
          {productsInListPreSaved.length !== 0 && (
            <div className="absolute bg-red-500 p-1 rounded text-white w-auto h-4 grid place-content-center font-medium text-xs right-2 ">
              {displayNumberOfProducts(productsInListPreSaved)}
            </div>
          )}
          <ShoppingCartIcon className="w-6 h-6 stroke-white" />
        </div>
      </nav>
    </div>
  );
};

const displayNumberOfProducts =(products)=> {
    const numberOfProducts = products.length;

    if(numberOfProducts === 0) return;
    if(numberOfProducts > 99) return `+99`;

    return numberOfProducts;
}

export default Navbar;
