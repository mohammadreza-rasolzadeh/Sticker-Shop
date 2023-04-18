import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../reducers/cartSlice";

const ProductForm = ({ product }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const naviage = useNavigate();

  const updateQty = () => setQty(qty + 1);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="container my-10">
      <div className="flex flex-col space-x-20">
        <label htmlFor="quantity">تعداد</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          inputMode="numeric"
          min="1"
          step="1"
          className="text-slate-800 w-20 border border-slate-700 rounded p-1"
          value={qty}
          onChange={updateQty}
        />
      </div>
      <div>
        <button
          className="w-full bg-palette-primary text-white p-3 mt-4 hover:bg-white hover:text-palette-primary hover:border border-palette-primary"
          onClick={() => handleAddToCart({ ...product, cartQuantity: qty })}
        >
          اضافه به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
