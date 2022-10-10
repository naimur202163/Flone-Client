import React from "react";
import Carousel from "react-elastic-carousel";

const items = [
  {
    id: 1,
    img: "https://i.ibb.co/rxwb4QH/single-slide-1.png",
    text: "Smart Prodcuts",
    content: "Summer Offer 2020 Collection",
  },
  {
    id: 2,
    img: "https://i.ibb.co/3Cc79Kc/single-slide-hm1-2.png",
    text: "Smart Prodcuts",
    content: "Winter Offer 2020 Collection",
  },
  {
    id: 3,
    img: "https://i.ibb.co/rxwb4QH/single-slide-1.png",
    content: "Summer Offer 2020 Collection",
    text: "Smart Prodcuts",
  },
  // {
  //   id: 4,
  //   img: "https://i.ibb.co/3Cc79Kc/single-slide-hm1-2.png",
  //   text: "Smart Prodcuts",
  //   ontent: "Summer Offer 2020 Collection",
  // },
  {
    id: 5,
    img: "https://i.ibb.co/rxwb4QH/single-slide-1.png",
    text: "Smart Prodcuts",
    content: "Winter Offer 2020 Collection",
  },
];
export default function Banner() {
  return (
    <div className="bg-light">
      <Carousel>
        {items.map((item) => (
          <div className=" md:flex p-16">
            <div className="p-8">
              <p className="text-xl ">{item.text}</p>
              <h2 className="text-[3.5rem] font-semibold  ">{item.content}</h2>
              <button className="mt-5 w-[10rem] h-[4rem] border-solid border-2 border-dark">
                Shop Now
              </button>
            </div>
            <div className="w-full h-full" key={item.id}>
              <img src={item.img} alt="" />{" "}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
