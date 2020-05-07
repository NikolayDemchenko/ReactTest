import React, { useState } from "react";
import AngleUp from "../../../../Buttons/Angle/AngleUp";
import AngleDown from "../../../../Buttons/Angle/AngleDown";
import Slider from "@material-ui/core/Slider";
import { cssUnits } from "../../../Class/HtmlCss";
import Select from "../../ModalWindows/Select";

export default function NumberSlider(props) {
  // console.log(
  //   "Render NumberSlider",
  //   /\W/gm.exec(props.value) && /\W/gm.exec(props.value)[0]
  // );

  const value = props.value.replace(/\W/gm, "");
  const sing = props.value.replace(/\w/gm, "");
  // console.log("props.value", props.value);
  // console.log("sing", sing);
  const parseNumber = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/\d+/gm);
      // console.log("parseNumber", Number(newVal));
      return newVal ? Number(newVal.join("")) : null;
    } else {
      console.log("parseNumber2", value);
      return value;
    }
  };
  const parseString = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/\D+/gm);
      // console.log("newVal", newVal);
      return newVal ? newVal.join("") : "";
    } else {
      console.log("parseString2", value);
      return "";
    }
  };

  return (
    <ThisSlider
      {...props}
      sing={sing}
      value={parseNumber(value)}
      unit={parseString(value)}
    />
  );
}

// Слайдер
const ThisSlider = ({ value, unit, sing, setPreview, setValue }) => {
  const changeValue = (val) => {
    console.log("val", val);
    setValue(sing + val + _unit);
    _setValue(val);
  };
  const oneChangeValue = (val) => {
    const newVal = _value + val;
    console.log("newVal", newVal);
    setValue(sing + newVal + _unit);
    _setValue(newVal);
  };
  const setUnit = (item) => {
    // console.log("setUnit", item);
    setunit(item.value);
    setValue(sing + _value + item.value);
  };
  const [_unit, setunit] = useState(unit);
  // console.log("unit", _unit);
  const [_value, _setValue] = useState(value);
  // console.log("value", _value);
  const [maxValue, setMaxValue] = useState(value < 5 ? 10 : value * 2);
  // console.log("maxValue", maxValue);
  return (
    <div
      onWheel={(e) => (e.deltaY < 0 ? oneChangeValue(+1) : oneChangeValue(-1))}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "20em",
        width: "100%",
        // border: "1px solid red"
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "transparent",
            appearance: "none",
            textAlign: "right",
            paddingLeft: "6px",
          }}
        >
          {sing}
          {_value}
        </div>
        <Select defaultItem={_unit} setItem={setUnit} listItems={cssUnits} />
      </div>
      <AngleUp onClick={() => changeValue(_value + 1)} />
      <Slider
        style={{
          margin: "0 auto",
          color: "#acf",
        }}
        onChange={(_, val) => {
          // console.log("val", val);
          _setValue(val);
          setPreview(val + _unit);
        }}
        onChangeCommitted={(_, val) => {
          changeValue(val);
          setMaxValue(val < 5 ? 10 : val * 2);
        }}
        max={maxValue}
        orientation="vertical"
        value={_value}
      />
      <AngleDown onClick={() => changeValue(_value - 1)} />
    </div>
  );
};
