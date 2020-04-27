import React, { useState } from "react";
import AngleUp from "../../../../../Buttons/Angle/AngleUp";
import AngleDown from "../../../../../Buttons/Angle/AngleDown";
import Slider from "@material-ui/core/Slider";
import { cssUnits } from "../../../../Class/HtmlCss";
import Select from "../../../ModalWindows/Select";

export default function NumberSlider({
  setValue,
  setPreview,
  value,
  btnColor,
}) {
  // console.log("Render NumberSlider");
  const btnActiv = btnColor ? btnColor.active : "";
  const setUnit = (item) => {
    console.log("setUnit", item);
    setunit(item.value);
    setValue(parseNumber(value) + item.value);
  };

  const parseNumber = (value) => {
    // console.log("value", typeof value);
    if (typeof value === "string") {
      const newVal = value.match(/\d/gm);
      // console.log("parseNumber", newVal);
      return newVal ? Number(newVal.join("")) : null;
    } else {
      console.log("parseNumber@2", value);
      return value;
    }
  };
  const parseString = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/\D/gm);
      // console.log('newVal', newVal)
      return newVal ? newVal.join("") : "";
    } else {
      return "";
    }
  };
  const [unit, setunit] = useState(parseString(value));
  console.log("unit", unit);
  // const _val=(()=>{
  //   console.log('parseNumber')
  //  return parseNumber(value)
  // })()
  const [_value, _setValue] = useState((()=>{
    console.log('parseNumber')
   return parseNumber(value)
  })());
console.log('_value', _value)
  const handleChange = (newValue) => {
    // console.log("newValue", newValue);
    setPreview(newValue + unit);
    _setValue(newValue);
  };
  const [maxValue, setMaxValue] = useState(_value < 5 ? 10 : _value * 2);
  // console.log('maxValue', maxValue)

  return (
    <div
      onWheel={(e) =>
        e.deltaY < 0
          ? setValue(_value + 1 + parseString(value)) & handleChange(_value + 1)
          : setValue(parseNumber(value) - 1 + parseString(value)) &
            handleChange(_value - 1)
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
          }}
        >
          {_value}
        </div>
        <Select
          defaultItem={parseString(value)}
          setItem={setUnit}
          listItems={cssUnits}
        />
      </div>
      <AngleUp
        onClick={() => setValue(parseNumber(value) + 1 + parseString(value))}
        color={btnActiv}
      />
      <Slider
        style={{ margin: "0 auto", color: "#acf" }}
        onChange={(_, val) => {
          console.log("val", val);
          handleChange(val);
        }}
        onChangeCommitted={(_, val) => {
          setValue(val + parseString(value));
          setMaxValue(val < 5 ? 10 : val * 2);
        }}
        max={maxValue}
        orientation="vertical"
        value={_value}
      />
      <AngleDown
        onClick={() => setValue(parseNumber(value) - 1 + parseString(value))}
        color={btnActiv}
      />
    </div>
  );
}
