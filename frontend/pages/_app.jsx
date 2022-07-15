import { ToastContainer } from "react-toastify";
import UIProvider from "../src/components/providers/ui-provider";
import ProductProvider from "../src/components/providers/product-provider";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProductProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </ProductProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
