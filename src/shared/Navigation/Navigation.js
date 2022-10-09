import React, { useState } from "react";

export default function Navigation() {
  const [nav, setnav] = useState(false);
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-green-600">
        Hello world!
      </h1>
    </div>
  );
}
