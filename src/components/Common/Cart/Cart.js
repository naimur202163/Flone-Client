import React from "react";

export default function Cart() {
  return (
    <div className="bg-white">
      <div className="bg-light">
        <h2 className="text-center text-2xl text-gray">Home/Cart</h2>
      </div>
      <div className="bg-white ">
        <div className="flex justify-center align-center">
          <div>
            <div></div>
            <div>
              <h2> No items found in cart</h2>{" "}
              <button className="">shop now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
