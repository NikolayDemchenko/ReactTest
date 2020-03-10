import React from "react";
import { ChromePicker } from "react-color";
import Popover from './Popover/PopoverPopupState'
import Color from "../../Buttons/Color/Color";
export default function PopoverPopupState({ color, setColor }) {
  const _setColor = rgb => {
    setColor([rgb.r, rgb.g, rgb.b,rgb.a]);
  };
  const rgb = { r: color[0], g: color[1], b: color[2], a: color[3] }; 
  return (
    <Popover >
      <Color     
      color={[rgb.r, rgb.g, rgb.b, rgb.a]}
    />
      <ChromePicker
        color={rgb}
        onChange={color => {
          _setColor(color.rgb);
        }}
      />
    </Popover>)            
}
