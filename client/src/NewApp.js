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
      style:{
        italic: true,
        weight: true,
        decoration: false
      },
      align: "center",
    }
  },
  type: "unit",
  color: [70, 80, 100, 100],
  visible: true
};
const NewApp = () => {

  const _on = 10;
  const _off = 100;
  const _active = 80;

  const btnColor = {
    on: [_on, _on, _on],
    active: [_active, _active, _active],
    off: [_off, _off, _off]
  };
  const [unit, setUnit] = useState(baseElement);

  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const parseNumberToPX = num => `${num}px`;

  const fontSize = parseNumberToPX(unit.name.font.size);
  const fontColor = parseColor(unit.name.font.color);
  const unitColor = parseColor(unit.color);

  console.log("unit", unit);
  return (
    
      <div
      // style={{ display: "grid", gridTemplateRows: "1fr " }}
      >
        <UnitInput unit={unit} setUnit={setUnit} btnColor={btnColor} />
        <input   
          style={{
            width: "100%",
            fontFamily: unit.name.font.family,
            fontWeight: unit.name.font.style.weight?7*100:4*100,
            fontStyle:unit.name.font.style.italic?'italic':'normal',
            textDecoration:unit.name.font.style.decoration?'underline':'none',
            textAlign: unit.name.font.align,
            fontSize: fontSize,
            color: fontColor,
            backgroundColor: unitColor
          }}
          value={unit.name.value||''}
          onChange={event =>
            setUnit({
              ...unit,
              name: { ...unit.name, value: event.target.value }
            })
          }
        />
      </div>
    
  );
};
export default NewApp;
