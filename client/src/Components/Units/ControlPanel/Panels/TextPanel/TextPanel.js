import React, { useContext } from "react";
import { ControlsContext } from "../../ControlsContext";
import VisibleInput from "../../../../Buttons/Visible/Visible";
import Align from "../../Align/TextAlign";
import ValueInput from "../../Text/StringInput";
import FontPanel from "../../Text/FontPanel";
export default function TextPanel({ label, text, setText }) {
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
        {/* Ввод текста*/}
        <ValueInput value={text.value} setValue={setValue} />
        <VisibleInput
          onClick={setVisible}
          color={text.visible ? btnColor.on : btnColor.off}
        />
        <Align setAlign={setAlign} align={text.align} btnColor={btnColor} />
      </div>
      <FontPanel font={text.font} setFont={setFont} />
    </div>
  );
}
