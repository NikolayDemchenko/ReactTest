import React from "react";
import Popover from "../../../ModalWindows/PopoverPopupState";
export default function PopoverInput({ value, setValue }) {
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      setValue(input.value);
    }
  };
  let input;
  return (
    <div style={{ display: "inline-flex" }}>
      <Popover>
        <div
          style={{ overflow: 'hidden', padding: "0px 5px", cursor: "pointer", minWidth: "10px",maxWidth: "80px", height:"20px"}}
        >
          {value ? value : "none"}
        </div>
        <input     
          style={{
            width: "200px",
            paddingLeft: "4px",
            border: "0px"
          }}
          type={"text"}
          ref={n => (input = n)}
          onKeyPress={handleKeyPress}
          onBlur={() => setValue(input.value)}
          defaultValue={value}
        />
      </Popover>
    </div>
  );
}
