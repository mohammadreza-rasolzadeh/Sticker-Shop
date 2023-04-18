import { Link } from "react-router-dom";
import CustomNumeralNumericFormat from "../Price";

const Navbar = () => {
  return (
    <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
        <Link to="/" className="cursor-pointer">
          <h1 className="flex no-underline">
            <span className="text-xl font-primary font-bold tracking-tight pt-1">
               استیکرکده
            </span>
          </h1>
        </Link>
        <div>
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-palette-primary m-auto"
              style={{ fontSize: "30px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            {/* {cartItems.length === 0 ? null : ( */}
            <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-7 -translate-y-3">
              <CustomNumeralNumericFormat
                                    value={10}
                                    thousandSeparator=","
                                />
            </div>
            {/* )} */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
