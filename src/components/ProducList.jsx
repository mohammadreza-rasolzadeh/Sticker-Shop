import ProductCart from "./ProductCart";
import { useGetAllProductQuery } from "../reducers/productApi";

const ProductList = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllProductQuery();
  return (
    <div className="container px-10 py-12 mx-auto grid grid-cols-1  sm:grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-3 xl:grid-cols-4 xl:px-5">
      {isSuccess ? (
        <>
          {data?.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </>
      ) : isLoading ? (
        <p>در حال بارگذاری</p>
      ) : (
        <p>مشکلی پیش آمده</p>
      )}
    </div>
  );
};

export default ProductList;
