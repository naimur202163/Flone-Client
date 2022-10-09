import React from "react";
import Carousel from "react-elastic-carousel";

const items = [
  { id: 1, title: "item #1" },
  { id: 2, title: "item #2" },
  { id: 3, title: "item #3" },
  { id: 4, title: "item #4" },
  { id: 5, title: "item #5" },
];
export default function Banner() {
  return (
    <div>
      <Carousel>
        {items.map((item) => (
          <div>
            <div>1</div>
            <div key={item.id}>{item.title}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
