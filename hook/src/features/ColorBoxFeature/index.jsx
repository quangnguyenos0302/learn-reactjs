import React, { useState } from "react";

function ColorBoxFeature(props) {
  const arrayColor = ["deeppink", "green", "yellow", "black", "blue"];
  const [color, setColor] = useState(() => {
    if (localStorage.getItem("colorbox")) {
      return localStorage.getItem("colorbox");
    }
    return arrayColor[0];
  });
  const handlerColorBox = (_) => {
    let index = Math.floor(Math.random() * arrayColor.length);
    setColor(arrayColor[index]);
    localStorage.setItem("colorbox", arrayColor[index]);
  };
  return (
    <div
      style={{ backgroundColor: color, width: "50px", height: "50px" }}
      onClick={handlerColorBox}
    ></div>
  );
}

export default ColorBoxFeature;
