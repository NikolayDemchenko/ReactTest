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

  const value = props.value.replace(/\-/gm, "");
  const sign = props.value.replace(/[^-].+/gm, "");
  // console.log("sing", sing);
  const parseNumber = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/[^-]\d*\.?\d+/gm);
      // console.log("parseNumber", Number(newVal));
      return newVal ? Number(newVal.join("")) : null;
    } else {
      console.log("parseNumber2", value);
      return value;
    }
  };
  const parseString = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/[^-\d+\.?\d+]\w*/gm);
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
      sign={sign}
      value={parseNumber(value)}
      unit={parseString(value)}
    />
  );
}

// Слайдер
const ThisSlider = ({ value, unit, sign, setPreview, setValue }) => {

  console.log("value", value);

  const getNumberSign = (x) => {
    if (x !== null) {
      return x.toString().includes(".")
        ? x.toString().split(".").pop().length
        : 0;
    } else {
      return 0;
    }
  };

  // Количество знаков после запятой
  const [numberSign, setnumberSign] = useState(getNumberSign(value));

  const setStep = () => {
    let step = 1;
    for (let i = 0; i < numberSign; i++) {
      step = step / 10;
    }
    return step;
  };

  const [step, setstep] = useState(setStep());

  const changeValue = (val) => {
    if (String(val).match(/^\-/gm)) {
      const _sign = String(val).replace(/[\w\.]+/gm, "");
      const value = String(val).replace(/^\-/gm, "");
      if (sign === _sign) {
        const val1 = Number(value) + _unit;
        setValue(val1);
        setPreview(val1);
        console.log("val1", val1);
      } else {
        const val2 = "-" + Number(value) + _unit;
        setValue(val2);
        setPreview(val2);
        console.log("val2", val2);
      }
      _setValue(Number(value));
      // console.log("Number(value)", Number(value));
    } else {
      const roundVal = Number(val.toFixed(numberSign));
      const val3 = sign + roundVal + _unit;
      setValue(val3);
      setPreview(val3);
      _setValue(roundVal);
      console.log("val3", val3);
      // console.log("roundVal3", roundVal);
    }
  };

  const setUnit = (item) => {
    // console.log("setUnit", item);
    setunit(item.value);
    setValue(sign + _value + item.value);
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
        e.deltaY < 0 ? changeValue(_value + step) : changeValue(_value - step)
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
          {sign}
          {_value}
        </div>
        <Select defaultItem={_unit} setItem={setUnit} listItems={cssUnits} />
      </div>
      <AngleUp onClick={() => changeValue(_value + step)} />
      <Slider
        style={{
          margin: "0 auto",
          color: "#acf",
        }}
        onChange={(_, val) => {
          _setValue(val);
          setPreview(sign + val + _unit);
        }}
        onChangeCommitted={(_, val) => {
          changeValue(val);
          setMaxValue(val < 5 ? 10 : val * 2);
        }}
        max={maxValue}
        orientation="vertical"
        value={_value}
        step={step}
      />
      <AngleDown onClick={() => changeValue(_value - step)} />
    </div>
  );
};
