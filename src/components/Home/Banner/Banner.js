import React from "react";
import Carousel from "react-elastic-carousel";

const items = [
  {
    id: 1,
    img: "https://i.ibb.co/rxwb4QH/single-slide-1.png",
    text: "Smart Prodcuts",
  },
  {
    id: 2,
    img: "https://i.ibb.co/3Cc79Kc/single-slide-hm1-2.png",
    text: "Smart Prodcuts",
  },
  { id: 3, img: "https://i.ibb.co/rxwb4QH/single-slide-1.png" },
  {
    id: 4,
    img: "https://i.ibb.co/3Cc79Kc/single-slide-hm1-2.png",
    text: "Smart Prodcuts",
  },
  {
    id: 5,
    img: "https://i.ibb.co/rxwb4QH/single-slide-1.png",
    text: "Smart Prodcuts",
    content: "",
  },
];
export default function Banner() {
  return (
    <div className="">
      <Carousel>
        {items.map((item) => (
          <div className="flex">
            <div>
              <p>{item.text}</p>
            </div>
            <div key={item.id}>
              <img src={item.img} alt="" />{" "}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
