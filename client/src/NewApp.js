import React, { useState } from "react";
import "./App.css";
// import PanelUnit from "./Components/Units/Component/Unit";
// import ViewUnit from "./Components/Units/Component/ViewUnit";
import UnitInput from "./Components/Units/ControlPanel/UnitInput";
// import Fonts from "./Components/Units/Class/Fonts";
const baseElement = {
  index: 0,
  name: {
    visible: true,
    value: null,
    font: {
      family: "Verdana",
      size: 50,
      color: [150, 170, 230, 100],
      weight: "bold",
      style: "italic",
      textAlign: "center",
      textDecoration: "underline"
    }
  },
  type: "unit",
  color: [70, 80, 100, 100],
  visible: true
};
const NewApp = () => {
  const _on = 255;
  const _off = 80;
  const _active = 40;
  const btnColor = {
    on: [_on, 40, 250],
    active: [_active, 80, _active],
    off: [_off, _off, _off]
  };
  const [unit, setUnit] = useState(baseElement);

  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]/100})`;
  const parseNumberToPX = num =>
    `${num}px`;

  const fontSize =parseNumberToPX(unit.name.font.size)
  const fontColor =parseColor(unit.name.font.color)
  const unitColor = parseColor(unit.color)


  console.log("unit", unit);
  return (
    <div>
      <div 
      // style={{ display: "grid", gridTemplateRows: "1fr " }}
      >
        <UnitInput unit={unit} setUnit={setUnit} btnColor={btnColor} />
        <div
          style={{
            fontFamily: unit.name.font.family,
            fontSize: fontSize,
            color: fontColor,
            backgroundColor: unitColor
          }}
        >
          {/* {unit.name.font.family} */}
          {unit.name.value}
        </div>
      </div>
    </div>
  );
};
export default NewApp;
