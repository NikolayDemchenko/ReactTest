import React, { useState } from "react";
import AngleUp from "../../../../Buttons/Angle/AngleUp";
import AngleDown from "../../../../Buttons/Angle/AngleDown";
import Slider from "@material-ui/core/Slider";
import Popover from "../../ModalWindows/PopoverPopupState";
import { cssUnits } from "../../../Class/HtmlCss";
import Select from "../../ModalWindows/Select";

export default function NumberSlider({
  setValue,
  setPreview,
  value,
  btnColor,
}) {
  // console.log('NumberSlider')
  const btnActiv = btnColor ? btnColor.active : "";
  const setUnit = (item) => {
    setValue(parseNumber(value) + item.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {  
      const val=(input.value = input.value.replace(/[^\d]/g, ""))
      setValue(val+ parseString(value));
      setPreview(val+ parseString(value));
      setMaxValue(val < 5 ? 10 : val * 2);
    }
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
    setPreview(newValue + parseString(value));
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
      >
        <div style={{ cursor: "pointer" }}>{value}</div>
        <div
          onWheel={(e) =>
            e.deltaY < 0
              ?
               setValue(_value + 1 + parseString(value)) &
                handleChange(null, _value + 1)
              :
                setValue(parseNumber(value) - 1 + parseString(value)) &
                handleChange(null, _value - 1)
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
            <input
              style={{
                backgroundColor: "transparent",
                width: "40px",
                appearance: "none",
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
                _setValue((input.value = input.value.replace(/[^\d]/g, "")));
              }}
              onKeyPress={handleKeyPress} 
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
             
            }}
            onChangeCommitted={(_, val) => {
              setValue(val + parseString(value));
              // console.log('val', val)
              setMaxValue(val < 5 ? 10 : val * 2);
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
