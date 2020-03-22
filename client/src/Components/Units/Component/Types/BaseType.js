import React from "react";
import PropTypes from "prop-types";

function BaseType({ unit, setUnit, setControlPanel, children }) {
  console.log("...BaseType...");
  let {
    color,
    align,
    size: { height, width }
  } = unit.settings;
  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const backColor = parseColor(color);

  const {
    type,
    settings: { flexDirection, alignSelf }
  } = unit;
  let style = {
    display: "flex",
    flexDirection,
    alignSelf
  };

  const margin = align !== undefined ? (align ? "0" : "0 0 0 auto") : "0 auto";
  const backgroundImage = type === "img" ? `url(${unit.value})` : "none";
  return (
    <div
      style={{
        ...style,
        margin,
        height,
        width,
        backgroundColor: backColor,
        backgroundSize: "cover",
        backgroundImage,
        border: "1px solid rgba(0,0,50,.5)",
        boxShadow: "0px 5px 6px 0px rgba(34, 60, 80, 0.51)"
      }}
      onClick={event => {
        event.stopPropagation();
        console.log("Клик бля!!!!!!!", Date.now(), unit);
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
