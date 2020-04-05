import React, { useState } from "react";
import jss from "jss";
import preset from "jss-preset-default";
function Div({ unit, setUnit, setControlPanel, children }) {
  let {
    style,
    style: { backgroundColor },
  } = unit.tagProps;
  backgroundColor = backgroundColor ? backgroundColor : "#fff";

  const [border, setBorder] = useState();

  const setBorderStyle = (array) => {
    const value = 240;
    const color =
      array[0] > value || array[1] > value || array[2] > value ? 0 : 255;
    return `solid 1px  rgba(${color}, ${color},${color}, 0.9)`;
  };

  jss.setup(preset());
  const { classes } = jss.createStyleSheet({
    style
  }).attach(); 

  return (
    <unit.tag
      tabIndex="0"
      className={classes.style}
      style={{
        // ...style,
        "--div-focusBorder": setBorderStyle(backgroundColor),
        border,
      }}
      // onMouseOver={(event) => {
      //   event.stopPropagation();
      //   setBorder(setBorderStyle(backgroundColor));
      // }}
      // onMouseOut={setBorder}
      onClick={(event) => {
        event.stopPropagation();
        console.log("Клик !!!!!!!", Date.now(), unit);
        // console.log("event.target.style", event.target.style);
        console.log(
          "getComputedStyle",
          getComputedStyle(event.target, null).margin
        );
        setControlPanel({ unit, setUnit });
      }}
    >
      {children}
    </unit.tag>
  );
}
export default Div;
