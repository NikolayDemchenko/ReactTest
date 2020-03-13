import React, { useEffect } from "react";
import RowInput from "./Inputs/RowInput";
export default function Unit({ unit, setUnit, setControlPanel }) {

  const setName = name => {
    setUnit({ ...unit, name });
    setControlPanel({ unit: { ...unit, name }, setUnit });
    console.log("setName", name);
  };
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };

  let { color, align, size:{height, width} } = unit.settings;
  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const backColor = parseColor(color);

  align = align !== undefined ? (align ? "0" : "0 0 0 auto") : "0 auto";
  return (
    <div
      style={{
        margin:align,
        height,
        width,   
        backgroundColor: backColor
      }}
      onClick={() => setControlPanel({ unit, setUnit })}
    >
      <RowInput text={unit.name} setText={setName} />
      <RowInput text={unit.value} setText={setValue} />
    </div>
  );
}
