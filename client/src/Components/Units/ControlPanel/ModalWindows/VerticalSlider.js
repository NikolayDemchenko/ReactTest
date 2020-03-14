import React from "react";
import Slider from "@material-ui/core/Slider";
import VerticalArrows from "../../../Buttons/Arrows/VerticalArrows";
import Popover from "./PopoverPopupState";
export default function VerticalSlider({ setValue, value, children }) {

  const newVal=value||''
  let input;
  return (
    <div style={{ display: "inline-flex",  
     }}>
      <input
        type={"number"}
        ref={node => {
          input = node;
        }}
        onChange={() => {
          setValue(input.value);   
        }}
        style={{ width: "46px", borderRadius: '4px', border: '0px'}}
        value={newVal}
      />
      <Popover> 
        {children}
        <div style={{ height: "200px", padding: "25px 10px" }}>
          <Slider            
            onChange={(_, val) => setValue(val)}
            orientation="vertical"
            value={newVal}  
          />
        </div>
      </Popover>
    </div>
  );
}
