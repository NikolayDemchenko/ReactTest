import React from "react";
import { ChromePicker } from "react-color";
import Popover from "../ModalWindows/PopoverPopupState";
export default function ColorPicker({ color, setColor }) {
  const _setColor = rgb => {
    setColor([rgb.r, rgb.g, rgb.b, rgb.a]);
  };
  const rgb = { r: color[0], g: color[1], b: color[2], a: color[3] };
  return (
    <div style={{ display: "inline-flex" }}>
      <Popover>
        <div
          style={{
            width: "20px",
            height: "20px",
            border: "2px outset grey",
            backgroundColor: `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`
          }}
        >         
        </div>
        <ChromePicker
          color={rgb}
          onChange={color => {
            _setColor(color.rgb);
          }}
        />
      </Popover>
    </div>
  );
}
