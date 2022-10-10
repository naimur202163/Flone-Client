import React from "react";
import { GiConvergenceTarget } from "react-icons/gi";

export default function Compare() {
  return (
    <div className="bg-white">
      <div className="bg-light p-5">
        <h2 className="text-center text-2xl text-gray">HOME / COMPARE</h2>
      </div>
      <div className="bg-white ">
        <div className="flex justify-center align-center mx-auto">
          <div>
            <GiConvergenceTarget className="text-center mx-auto text-[10rem] p-5" />
            <h2 className="text-center mx-auto text-2xl">
              {" "}
              No items found in cart
            </h2>{" "}
            <div className="p-4 ">
              <button className="text-center ml-10 h-[3rem] w-[8rem] hover:bg-purple bg-dark text-white">
                shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
