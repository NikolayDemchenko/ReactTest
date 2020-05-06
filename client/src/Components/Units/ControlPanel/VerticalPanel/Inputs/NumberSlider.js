import React, { useState } from "react";
import AngleUp from "../../../../Buttons/Angle/AngleUp";
import AngleDown from "../../../../Buttons/Angle/AngleDown";
import Slider from "@material-ui/core/Slider";
import { cssUnits } from "../../../Class/HtmlCss";
import Select from "../../ModalWindows/Select";

export default function NumberSlider(props) {
  // console.log("Render NumberSlider", props.value.match(/\-/gm)[0]);

  const value = props.value.replace(/\-/gm, "");

  const parseNumber = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/\d+/gm);
      // console.log("parseNumber", Number(newVal));
      return newVal ? Number(newVal.join('')) : null;
    } else {
      console.log("parseNumber2", value);
      return value;
    }
  };
  const parseString = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/\D+/gm);
      // console.log("newVal", newVal);
      return newVal ? newVal.join('') : "";
    } else {
      console.log("parseString2", value);
      return "";
    }
  };

  return (
    <ThisSlider
      {...props}
      value={parseNumber(value)}
      unit={parseString(value)}
    />
  );
}

// Слайдер
const ThisSlider = ({ value, unit, setPreview, setValue }) => {
  const changeValue = (val) => {
    setValue(val + _unit);
    _setValue(val);
  };
  const setUnit = (item) => {
    // console.log("setUnit", item);
    setunit(item.value);
    setValue(_value + item.value);
  };
  const [_unit, setunit] = useState(unit);
  // console.log("unit", _unit);
  const [_value, _setValue] = useState(value);
  // console.log("value", _value);
  const [maxValue, setMaxValue] = useState(value < 5 ? 10 : value * 2);
  // console.log("maxValue", maxValue);
  return (
    <div
      onWheel={(e) =>
        e.deltaY < 0 ? changeValue(_value + 1) : changeValue(_value - 1)
      }
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
          {_value}
        </div>
        <Select defaultItem={_unit} setItem={setUnit} listItems={cssUnits} />
      </div>
      <AngleUp onClick={() => changeValue(_value + 1)} />
      <Slider
        style={{ margin: "0 auto", color: "#acf" }}
        onChange={(_, val) => {
          // console.log("val", val);
          _setValue(val);
          setPreview(val + _unit);
        }}
        onChangeCommitted={(_, val) => {
          changeValue(val);
          setMaxValue(val < 5 ? 10 : val * 2);
        }}
        min={0}
        max={maxValue}
        orientation="vertical"
        value={_value}
      />
      <AngleDown onClick={() => changeValue(_value - 1)} />
    </div>
  );
};
