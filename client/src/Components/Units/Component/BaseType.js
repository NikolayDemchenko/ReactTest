import React from "react";

export default function Unit({ unit, setUnit, setControlPanel, children }) {
  let {
    color,
    align,
    size: { height, width }
  } = unit.settings;
  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const backColor = parseColor(color);

  const { type } = unit.settings;
  // const row = { display: "flex", alignItems: "center" };
  // const doc = { display: "flex", alignItems: "center"};
  // let style = type !== "doc" ? row : doc;
  let style = { display: "flex", alignItems: "center"};

  const margin = align !== undefined ? (align ? "0" : "0 0 0 auto") : "0 auto";
  const backgroundImage = type==='img'?`url(${unit.value})`:'none'
  return (
    <div
      style={{
        ...style,
        margin,
        height,
        width,
        backgroundColor: backColor,
        backgroundSize: "cover",
        backgroundImage
      }}
      onClick={() => setControlPanel({ unit, setUnit })}
    >
      {children}
    </div>
  );
}
