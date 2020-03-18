import React, { useEffect, useState } from "react";
import AngleUp from '../../../Buttons/Angle/AngleUp'
import AngleDown from '../../../Buttons/Angle/AngleDown'
import Slider from "@material-ui/core/Slider";
import Popover from "./PopoverPopupState";
export default function VerticalSlider({ setValue, value, children,btnColor }) {
  const [maxValue, setMaxValue] = useState();
  useEffect(() => {
    setMaxValue(value < 5 ? 10 : value * 2);
  }, [maxValue]);
  console.log("maxValue", maxValue);
  const newVal = value || "";
  let input;
  return (
    <div style={{ display: "inline-flex" }}>
      <input
        type={"number"}
        ref={node => {
          input = node;
        }}
        onChange={() => {
          setValue(input.value);
        }}
        style={{ width: "46px", borderRadius: "4px", border: "0px" }}
        value={newVal}
      />
      <Popover reload={setMaxValue}>
        {children}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "200px",
            padding: "5px 10px"
          }}
        >
          <AngleUp onClick={()=>setValue(Number(value)+1)} color={btnColor.active}/>
          <Slider
            onChange={(_, val) => setValue(val)}
            max={maxValue}
            orientation="vertical"
            value={newVal}
          />
         <AngleDown onClick={()=>setValue(value-1)} color={btnColor.active}/>
        </div>
      </Popover>
    </div>
  );
}
