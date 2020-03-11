import React, { useContext } from "react";
import { ControlsContext } from "./ControlsContext";  
import VisibleInput from "../../Buttons/Visible/Visible";
import ValueInput from "./StringInput";
import FontInput from "./FontInput/FontInput";
export default function RowInput({label, row, setRow }) {
  const { btnColor,backgroundColor } = useContext(ControlsContext);
  const setVisible = () => {
    setRow({ ...row, visible: !row.visible });
    console.log("setVisible", !row.visible);
  };
  const setValue = value => {
    setRow({ ...row, value });
    console.log("setValue", value);
  };
  const setFont = font => {
    setRow({ ...row, font });
    console.log("setFont", font);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" ,backgroundColor,margin:'2px', padding:'4px'}}>
      <div style={{ display: "inline-flex" }}>
        {label}
        {/* Ввод текста - реализован StringInput */}
        <ValueInput value={row.value} setValue={setValue} />
        <VisibleInput
          onClick={setVisible}
          color={row.visible ? btnColor.on : btnColor.off}
        />
      </div>
        <FontInput font={row.font} setFont={setFont} />     
    </div>
  );
}
