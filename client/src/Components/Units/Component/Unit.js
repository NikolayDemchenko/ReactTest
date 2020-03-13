import React, { useEffect } from "react";
import Name from "./Inputs/RowInput";
export default function Unit({
  unit,
  setUnit,
  setControlPanel
}) {
  const setName = name => {
    setUnit({ ...unit, name });
    setControlPanel({ unit: { ...unit, name }, setUnit });
    console.log("setName", name);
  };

  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const backColor = parseColor(unit.settings.color);


  return (
    <div
      style={{
        height: "140px",
        width: "100%",
        // color: fontColor,
        backgroundColor: backColor
      }}
      onClick={() => setControlPanel({ unit, setUnit })}
    >
      <Name text={unit.name} setText={setName}  />
    </div>
  );
}
