import React,{useState} from "react";
import { ChromePicker } from "react-color";
import Popover from "../../../ModalWindows/PopoverPopupState";
export default function ColorPicker({ value, setValue,setPreview }) {
// console.log("Render ColorPicker");
  const [color, setColor] = useState(value)
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
          color={color}
          onChange={color => {
            setColor(color.rgb)
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