import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import CustomNumeralNumericFormat from "./Price";
import ProductForm from "./ProductForm";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === productId)
  );
  console.log(product);

  return (
    <>
      {product ? (
        <div className="container mx-auto mt-10 px-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          <Helmet>
            <title>{product?.title}</title>
          </Helmet>
          <div>
            <img
              src={`http://localhost:9000/images/${product?.sticker}`}
              alt={product?.title}
            />
          </div>
          <div className="mt-3">
            <Link
              to="/"
              className="border border-palette-primary px-10 py-2 text-2xl text-palette-primary hover:bg-palette-primary hover:text-white"
            >
              برگشت به صفحه محصولات
            </Link>
            <div className="mt-10 flex flex-col space-y-5">
              <h5 className="text-2xl font-bold text-palette-primary">
                {product?.title}
              </h5>
              <p>{product?.description}</p>
              <div className="text-palette-primary">
                <CustomNumeralNumericFormat
                  value={product?.price}
                  thousandSeparator=","
                  prefix="قیمت : "
                  suffix=" تومان "
                />
              </div>
            </div>
            <ProductForm product={product} />
          </div>
        </div>
      ) : (
        <p>بارگذاری محصولات</p>
      )}
    </>
  );
};

export default ProductDetails;
