import React, { useState,useEffect } from "react";
import AngleUp from "../../../../Buttons/Angle/AngleUp";
import AngleDown from "../../../../Buttons/Angle/AngleDown";
import Slider from "@material-ui/core/Slider";
import Popover from "../../ModalWindows/PopoverPopupState";
import { cssUnits } from "../../../Class/Css";
import Select from "../../ModalWindows/Select";

export default function NumberSlider({ setValue, value, btnColor }) {
  // console.log('NumberSlider')
  const btnActiv = btnColor ? btnColor.active : "";
  const setUnit = (item) => {
    setValue(parseNumber(value) + item.value);
  };

  const parseNumber = (value) => {
    // console.log("value", typeof value);
    if (typeof value === "string") {
      const newVal = value.match(/\d/gm);
      // console.log('newValNumber', newVal)
      return newVal ? Number(newVal.join("")) : null;
    } else {
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
  const [_value, _setValue] = useState(parseNumber(value));

  const handleChange = (event, newValue) => {
    // console.log("newValue", newValue);
    _setValue(newValue);
  };
  const [maxValue, setMaxValue] = useState(_value < 5 ? 10 : _value * 2);
// console.log('maxValue', maxValue)
  let input;
  return (
    <div style={{ display: "inline-flex" }}>
      <Popover
        PaperProps={{
          style: {
            background: "rgba(30,40,57,.85)",
            border: "1px solid #abc",
          },
        }}
        // reload={() =>
        //   setMaxValue(_value < 5 ? 10 : _value * 2)
        // }
      >
        <div style={{ cursor: "pointer" }}>{value}</div>
        <div
          onWheel={(e) =>
            e.deltaY < 0
              ? setValue(parseNumber(value) + 1 + parseString(value))
              : setValue(parseNumber(value) - 1 + parseString(value))
          }
          style={{
            display: "flex",
            flexDirection: "column",
            height: "300px",
            width: "100%",
            // padding: "5px 0px",
            // border: "1px solid red"
          }}
        >
          <div style={{ display: "flex" }}>
            <input
              style={{
                backgroundColor: "transparent",
                width: "40px",
                appearance: "none",
                border: "0px",
                textAlign: "right",
                color: "#eee",
                outline: "none",
                border: 0,
              }}
              type={"text"}
              ref={(node) => {
                input = node;
              }}
              onChange={() => {
                setValue(
                  (input.value =
                    input.value.replace(/[^\d]/g, "") + parseString(value))
                );
              }}
              value={_value}
              onClick={(e) => e.target.select()}
            />
            <Select
              defaultItem={parseString(value)}
              setItem={setUnit}
              listItems={cssUnits}
            />
          </div>
          <AngleUp
            onClick={() =>
              setValue(parseNumber(value) + 1 + parseString(value))
            }
            color={btnActiv}
          />
          <Slider
            style={{ margin: "0 auto", color: "#acf" }}
            onChange={(_, val) => {
              handleChange(_, val);
              setValue(val + parseString(value));      
            }}
            onChangeCommitted={(_, val) => {
              // handleChange(_, val);
              // setValue(val + parseString(value));
              // console.log('val', val)
              setMaxValue(val < 5 ? 10 : val * 2)
            }}
            max={maxValue}
            orientation="vertical"
            value={_value}
          />
          <AngleDown
            onClick={() =>
              setValue(parseNumber(value) - 1 + parseString(value))
            }
            color={btnActiv}
          />
        </div>
      </Popover>
    </div>
  );
}
