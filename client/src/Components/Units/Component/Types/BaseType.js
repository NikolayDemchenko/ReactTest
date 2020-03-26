import React, { useState } from "react";
import PropTypes from "prop-types";
import _style from "./BaseType.module.css";
function BaseType({ unit, setUnit, setControlPanel, children }) {
  // console.log("...BaseType...");
  const {
    type,
    settings: {
      flexDirection,
      alignSelf,
      color,
      align,
      size: { height, width }
    }
  } = unit;

  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const backColor = parseColor(color);

  const margin = align !== undefined ? (align ? "0" : "0 0 0 auto") : "0 auto";
  const backgroundImage = type === "img" ? `url(${unit.value})` : "none";

  const [border, setBorder] = useState();

  const setBorderStyle = array => {
    const value=240
    const color = array[0] > value || array[1] > value || array[2] > value ? 0 : 255;
    return `1px double rgba(${color}, ${color},${color}, 0.9)`;
  };

  let style = {
    "--div-focusBorder": setBorderStyle(color),
    display: "flex",
    flexDirection,
    alignSelf,
    border,
    margin,
    height,
    width,
    backgroundColor: backColor,
    backgroundSize: "cover",
    backgroundImage
  };

  return (
    <div
      tabIndex="0"
      className={_style.BaseType}
      style={{
        ...style
      }}
      onMouseOver={event => {
        event.stopPropagation();
        setBorder(` ${setBorderStyle(color)}`);
      }}
      onMouseOut={() => setBorder()}
      onClick={event => {
        event.stopPropagation();
        console.log("Клик !!!!!!!", Date.now(), unit);
        // alert('Клик бля!!!!!!!')
        setControlPanel({ unit, setUnit });
      }}
    >
      {children}
    </div>
  );
}
BaseType.propTypes = {
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
export default BaseType;
