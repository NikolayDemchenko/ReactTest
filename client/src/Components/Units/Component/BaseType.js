import React, { useEffect } from "react";
import RowInput from "./Inputs/RowInput";
export default function Unit({ unit, setUnit, setControlPanel, children }) {
  const setName = name => {
    setUnit({ ...unit, name });
    setControlPanel({ unit: { ...unit, name }, setUnit });
    console.log("setName", name);
  };

  let {
    color,
    align,
    size: { height, width }
  } = unit.settings;
  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const backColor = parseColor(color);

  const { type } = unit.settings;
  const row = { display: "flex", alignItems: "center" };
  const doc = {};
  
  let style = type !== "doc" ?row:doc

  align = align !== undefined ? (align ? "0" : "0 0 0 auto") : "0 auto";
  return (
    <div
      style={{
        ...style,
        margin: align,
        height,
        width,
        backgroundColor: backColor
      }}
      onClick={() => setControlPanel({ unit, setUnit })}
    >
      <RowInput text={unit.name} setText={setName} />
      {children}
    </div>
  );
}
