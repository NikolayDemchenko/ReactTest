import React from "react";
import { ChromePicker } from "react-color";
import Popover from "../../ModalWindows/PopoverPopupState";
export default function ColorPicker({ value, setValue }) {
  return (
    <div style={{ display: "inline-flex" }}>
      <Popover >
        <div
          style={{
            width: "18px",
            height: "18px",
            border: "1px outset grey",
            backgroundColor: value
          }}
        ></div>
        <ChromePicker
          color={value}
          onChange={color => {
            setValue(`rgba(${Object.values(color.rgb).join(",")})`);
          }}
        />
      </Popover>
    </div>
  );
}
