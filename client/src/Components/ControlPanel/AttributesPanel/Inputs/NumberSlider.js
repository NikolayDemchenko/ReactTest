import React, { useState, useEffect } from "react";
import Icon from "react-icons-kit";
import { angleDown } from "react-icons-kit/fa/angleDown";
import { angleUp } from "react-icons-kit/fa/angleUp";
import Slider from "@material-ui/core/Slider";
import { cssUnits } from "../../../Class/HtmlCss";
// import Select from "../../ModalWindows/Select";
import SelectPanel from "../../SelectPanel";

export default function NumberSlider(props) {
  const value = props.value.replace(/-/gm, "");
  const sign = props.value.replace(/[^-]\d*/gm, "");
  // console.log('value', value)
  // console.log("sign1", sign);
  const parseNumber = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/\d+\.?\d*/gm);
      // console.log("parseNumber",newVal);
      return newVal ? Number(newVal.join("")) : null;
    } else {
      console.log("parseNumber2", value);
      return value;
    }
  };
  const parseString = (value) => {
    if (typeof value === "string") {
      const newVal = value.match(/[^-\d+.?\d+]\w*/gm);
      // console.log("parseString", newVal);
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
  // console.log("inValue", value);

  // Количество знаков после запятой
  const getNumberSign = (x) => {
    if (x !== null) {
      return x.toString().includes(".")
        ? x.toString().split(".").pop().length
        : 0;
    } else {
      return 0;
    }
  };
  const [singQuantity] = useState(getNumberSign(value));

  const setStep = () => {
    let step = 1;
    for (let i = 0; i < singQuantity; i++) {
      step = step / 10;
    }
    return step;
  };
  const step = setStep();

  const changeValue = (val, chain) => {
    if (String(val).match(/^-/gm)) {
      const _sign = String(val).replace(/[\w.]+/gm, "");
      const value = String(val).replace(/^-/gm, "");
      if (sign === _sign) {
        const val1 = Number(value) + unit;
        setValue(val1, `\nchangeValue-NumberSlider ${chain}`);
        setPreview(val1);
      } else {
        const val2 = "-" + Number(value) + unit;
        setValue(val2, `\nchangeValue-NumberSlider ${chain}`);
        setPreview(val2);
      }
      _setValue(Number(value));
    } else {
      const roundVal = Number(val.toFixed(singQuantity));
      const val3 = sign + roundVal + unit;
      setValue(val3, `\nchangeValue-NumberSlider ${chain}`);
      setPreview(val3);
      _setValue(roundVal);
    }
  };

  const setUnit = (item) => {
    const thisValue=sign + _value + item
    setValue(thisValue);
    setPreview(thisValue);
  };
  useEffect(() => {
    _setValue(value);
  }, [value]);
  const [_value, _setValue] = useState(value);
  // console.log("_value", _value);
  // console.log("value", String(value).length);
  return (
    <div
      onWheel={(e) =>
        e.deltaY < 0
          ? changeValue(_value + step, "-onWheelUp")
          : changeValue(_value - step, "-onWheelDown")
      }
      style={{
        display: "flex",
        flexDirection: "column",
        height: "20em",
        // width: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          // outline: "1px solid red",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "transparent",
            // width: `${String(value).length * 0.5 + 0.5}em`,
            overflow: "visible",
            appearance: "none",
            textAlign: "right",
            paddingLeft: "2px",
          }}
        >
          {sign}
          {_value}
        </div>
        <SelectPanel
          selectedItem={unit}
          items={cssUnits.map((unit) => unit.value)}
          setItem={setUnit}        
        />
        {/* <Select defaultItem={unit} setItem={setUnit} listItems={cssUnits} /> */}
      </div>
      <div
        style={{
          cursor: "pointer",
          width: "20px",
          margin: "0 auto",
          paddingBottom: "20px",
        }}
        onClick={() => changeValue(_value + step, "-onClickAngleUp")}
      >
        <Icon size={"100%"} icon={angleUp} />
      </div>
      <Slider
        style={{
          margin: "0 auto",
          color: "#acf",
        }}
        onChange={(_, val) => {
          _setValue(val);
          setPreview(sign + val + unit);
        }}
        onChangeCommitted={(_, val) => {
          changeValue(val, "\nonChangeCommitted-Slider");
        }}
        max={value < 25 ? 50 : value * 2}
        orientation="vertical"
        value={_value}
        step={step}
      />
      <div
        style={{
          cursor: "pointer",
          width: "20px",
          margin: "0 auto",
          paddingTop: "20px",
        }}
        onClick={() => changeValue(_value - step, "-onClickAngleDown")}
      >
        <Icon size={"100%"} icon={angleDown} />
      </div>
    </div>
  );
};
