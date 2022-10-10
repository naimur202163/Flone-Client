import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Cart() {
  return (
    <div className="bg-white">
      <div className="bg-light">
        <h2 className="text-center text-2xl text-gray">Home/Cart</h2>
      </div>
      <div className="bg-white ">
        <div className="flex justify-center align-center mx-auto">
          <div>
            <AiOutlineShoppingCart className="text-center mx-auto" />
            <h2 className="text-center mx-auto"> No items found in cart</h2>{" "}
            <button className="text-center mx-auto">shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
