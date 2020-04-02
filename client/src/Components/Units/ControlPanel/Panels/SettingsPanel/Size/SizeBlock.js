import React from "react";
import Size from "./UnitSize";
export default function BlockSize({ setSize, size, btnColor,reload }) {
  const setHeight = height => {
    setSize({ ...size, height });
    console.log("setHeight", height);
  };
  const setWidth = width => {
    setSize({ ...size, width });
    console.log("setWidth", width);
  };

  return (
    <div
      style={
        {
          display: "flex",
          flexDirection: 'column',
          // border: "2px solid currentColor"
        }
      }
    >
      <Size reload={reload}setValue={setHeight} value={size.height} btnColor={btnColor}>

      </Size>
      <Size reload={reload} setValue={setWidth} value={size.width} btnColor={btnColor}>
 
      </Size>
    </div>
  );
}
