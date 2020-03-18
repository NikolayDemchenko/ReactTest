import React from "react";
// import Size from "../Sliders/VerticalSlider";
import Size from "./UnitSize";
import VerticalArrows from "../../../Buttons/Arrows/VerticalArrows";
import HorisontalArrows from "../../../Buttons/Arrows/HorisontalArrows";
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
        <VerticalArrows color={btnColor.active} />
      </Size>
      <Size reload={reload} setValue={setWidth} value={size.width} btnColor={btnColor}>
        <HorisontalArrows color={btnColor.active} />
      </Size>
    </div>
  );
}
