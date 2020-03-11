import React from "react";
import Slider from "@material-ui/core/Slider";
import VerticalArrows from "../../../Buttons/VerticalArrows/VerticalArrows";
import Popover from "../Popover/PopoverPopupState";

export default function CustomizedSlider({ setValue, value, btnColor }) {
  let input;
  return (
    <div style={{ display: "inline-flex", 
    // border: "2px solid currentColor"
     }}>
      <input
        type={"number"}
        ref={node => {
          input = node;
        }}
        onChange={() => {
          setValue(input.value);
        }}
        style={{ width: "40px", borderRadius: '4px', border: '0px'}}
        value={value}
      />
      <Popover>
        <VerticalArrows color={btnColor.active} />

        <div style={{ height: "200px", padding: "25px 10px" }}>
          <Slider            
            onChange={(_, val) => setValue(val)}
            orientation="vertical"
            value={value}
            aria-labelledby="vertical-slider"
          />
        </div>
      </Popover>
    </div>
  );
}
