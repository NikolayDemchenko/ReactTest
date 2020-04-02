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
          style={{ padding: "0px 5px", cursor: "pointer", minWidth: "10px" }}
        >
          {value}
        </div>
        <input
          style={{
            width: "100%",
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
