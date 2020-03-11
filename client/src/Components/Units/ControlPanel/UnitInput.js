import React, { useContext } from "react";
import { ControlsContext } from "./ControlsContext";
import TypeInput from "./Select";
import VisibleInput from "../../Buttons/Visible/Visible";
import Types from "../Class/Types";
import Name from "./RowInput";
import ColorInput from "./ColorInput";
const row = {
  value: null,
  visible: true,
  font: {
    family: "Verdana",
    size: "18px",
    color: "blue",
    weight: "bold",
    style: "italic",
    textAlign: "center",
    textDecoration: "underline"
  }
};
const unit = {
  type: "unit",
  color: "white",
  visible: true,
  name: row,
  value: null
};

export default function UnitInput({ unit, setUnit, panel, setPanel }) {
  const { btnColor, backgroundColor } = useContext(ControlsContext);
  const setType = type => {
    setUnit({ ...unit, type });
    console.log("setType", type);
  };
  const setVisible = () => {
    setUnit({ ...unit, visible: !unit.visible });
    console.log("setVisible", !unit.visible);
  };
  const setColor = color => {
    setUnit({ ...unit, color });
    console.log("setColor", color);
  };
  const setName = name => {
    panel.setText(name);
    setPanel({ ...panel, text: name });
    console.log("setName", name);
  };
  console.log("panel.text", panel.text);
  return (
    <div style={{ display: "inline-flex" }}>
      <div
        style={{
          display: "inline-flex",
          backgroundColor,
          margin: "2px",
          padding: "4px"
        }}
      >
        <TypeInput
          listItems={Types}
          defaultItem={unit.type}
          setItem={type => setType(type.value)}
        />

        <VisibleInput
          onClick={setVisible}
          color={unit.visible ? btnColor.on : btnColor.off}
        />

        <ColorInput color={unit.color} setColor={setColor} />
      </div>
      {/* Заголовок - реализован RowInput */}
      <Name
        label={"Текст :"}
        row={panel.text}
        setRow={setName}
      />
    </div>
  );
}
