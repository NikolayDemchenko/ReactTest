import React, { useState } from "react";
import PropTypes from "prop-types";
import _style from "./BaseType.module.css";
function Div({ unit, setUnit, setControlPanel, children }) {
  // console.log("...BaseType...");
  const { style } = unit.tagProps;

  const [border, setBorder] = useState();
  const setBorderStyle = array => {
    const value = 240;
    const color =
      array[0] > value || array[1] > value || array[2] > value ? 0 : 255;
    return `solid 1px  rgba(${color}, ${color},${color}, 0.9)`;
  };

  return (
    <div
      tabIndex="0"
      className={_style.BaseType}
      style={{
        ...style,
        "--div-focusBorder": setBorderStyle(style.backgroundColor),
        border
      }}
      onMouseOver={event => {
        event.stopPropagation();
        setBorder(setBorderStyle(style.backgroundColor));
      }}
      onMouseOut={setBorder}
      onClick={event => {
        event.stopPropagation();
        console.log("Клик !!!!!!!", Date.now(), unit);
        setControlPanel({ unit, setUnit });
      }}
    >
      {children}
    </div>
  );
}
Div.propTypes = {
  unit: PropTypes.shape({
    type: PropTypes.string,
    settings: PropTypes.shape({
      size: PropTypes.shape({
        height: PropTypes.string,
        width: PropTypes.string
      }),
      index: PropTypes.number,
      color: PropTypes.array,
      visible: PropTypes.bool
    }),
    value: PropTypes.object
  }),
  setUnit: PropTypes.func
};
export default Div;
