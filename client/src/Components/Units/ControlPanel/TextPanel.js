import React, { useContext } from "react";
import { ControlsContext } from "./ControlsContext";
import VisibleInput from "../../Buttons/Visible/Visible";
import Align from "./Align/TextAlign";
import Color from "./ColorInput";
import ValueInput from "./StringInput";
import FontInput from "./FontInput/FontPanel";
export default function TextInput({ label, text, setText }) {
  const { btnColor, backgroundColor } = useContext(ControlsContext);
  const setVisible = () => {
    setText({ ...text, visible: !text.visible });
    console.log("setVisible", !text.visible);
  };
  const setValue = value => {
    setText({ ...text, value });
    console.log("setValue", value);
  };
  const setFont = font => {
    setText({ ...text, font });
    console.log("setFont", font);
  };
  const setColor = color => {
    setText({ ...text, color });
    console.log("font.color", color);
  };
  const setAlign = align => {
    setText({ ...text, align });
    console.log("font.align", align);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor,
        margin: "2px",
        padding: "4px"
      }}
    >
      <div style={{ display: "inline-flex" }}>
        {label}
        {/* Ввод текста - реализован StringInput */}
        <ValueInput value={text.value} setValue={setValue} />
        <VisibleInput
          onClick={setVisible}
          color={text.visible ? btnColor.on : btnColor.off}
        />
        <Color setColor={setColor} color={text.color} />
        <Align setAlign={setAlign} align={text.align} btnColor={btnColor} />
      </div>
      <FontInput font={text.font} setFont={setFont} />
    </div>
  );
}
