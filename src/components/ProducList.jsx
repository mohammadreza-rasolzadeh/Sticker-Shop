import ProductCart from "./ProductCart";
import { useGetAllProductQuery } from "../reducers/productApi";

const ProductList = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllProductQuery();
  return (
    <div className="py-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-8">
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
