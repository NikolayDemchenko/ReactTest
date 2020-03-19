import React, { useState } from "react";
import AngleUp from "../../../Buttons/Angle/AngleUp";
import AngleDown from "../../../Buttons/Angle/AngleDown";
import Slider from "@material-ui/core/Slider";
import Popover from "./PopoverPopupState";
export default function VerticalSlider({
  setValue,
  value,
  children,
  btnColor
}) {
  const [maxValue, setMaxValue] = useState(value < 5 ? 10 : value * 2);

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
        value={value}
      />
      <Popover reload={() => setMaxValue(value < 5 ? 10 : value * 2)}>
        {children}
        <div
          onWheel={e =>e.deltaY < 0 ? setValue(value + 1) : setValue(value - 1)}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "200px",
            padding: "5px 10px"
          }}
        >
          <AngleUp
            onClick={() => setValue(value + 1)}
            color={btnColor.active}
          />
          <Slider
            onChange={(_, val) => setValue(val)}
            max={maxValue}
            orientation="vertical"
            value={value}
          />
          <AngleDown
            onClick={() => setValue(value - 1)}
            color={btnColor.active}
          />
        </div>
      </Popover>
    </div>
  );
}
