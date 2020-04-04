import React, { useState } from "react";
// import _style from "./BaseType.module.css";
function Div({ unit, setUnit, setControlPanel, children }) {
  // console.log("...BaseType...");
  let {
    style,
    style: { backgroundColor }
  } = unit.tagProps;

  backgroundColor = backgroundColor ? backgroundColor : "#fff";
  // console.log("backgroundColor", backgroundColor);
  const [border, setBorder] = useState();

  const setBorderStyle = array => {
    const value = 240;
    const color =
      array[0] > value || array[1] > value || array[2] > value ? 0 : 255;
    return `solid 1px  rgba(${color}, ${color},${color}, 0.9)`;
  };
  const TagType = `${unit.tag}`;
  return (
    <TagType
      tabIndex="0"
      // className={_style.BaseType}
      style={{
        ...style,
        "--div-focusBorder": setBorderStyle(backgroundColor),
        border
      }}
      onMouseOver={event => {
        event.stopPropagation();
        setBorder(setBorderStyle(backgroundColor));
      }}
      onMouseOut={setBorder}
      onClick={event => {
        event.stopPropagation();
        console.log("Клик !!!!!!!", Date.now(), unit);
        setControlPanel({ unit, setUnit });
      }}
    >
      {children}
    </TagType>
  );
}
export default Div;
