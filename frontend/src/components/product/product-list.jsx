import Loader from "../ui/loader";
import ProductGroupByCategory from "./product-group";
import ProductRow from "./product-row";

const ProductList = ({ products, error, loading, view }) => {
  console.log(products);

  if (loading) return <Loader />;
  if (error) return <p>Error while loading products</p>;
  if (!products.length) return <p>No products</p>;

  const ProductComponent = view ? ProductRow : ProductGroupByCategory;

  return <ProductComponent products={products} />;
};

export default ProductList;
