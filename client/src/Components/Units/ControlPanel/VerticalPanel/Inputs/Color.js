import React from "react";
import { ChromePicker } from "react-color";
import Popover from "../../ModalWindows/PopoverPopupState";
export default function ColorPicker({ value, setValue,setPreview }) {
  return (
    <div style={{ display: "inline-flex" }}>
      <Popover >
        <div
          style={{
            cursor:"pointer",
            marginTop:".3rem",
            // marginRight:".3rem",
            width: "30px",
            height: "16px",
            border: "1px outset grey",
            backgroundColor: value
          }}
        ></div>
        <ChromePicker
          color={value}
          onChange={color => {
            setPreview(`rgba(${Object.values(color.rgb).join(",")})`);
          }}
          onChangeComplete={color => {
            setValue(`rgba(${Object.values(color.rgb).join(",")})`);
          }}
        />
      </Popover>
    </div>
  );
}
