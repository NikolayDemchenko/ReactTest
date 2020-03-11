import React from "react";
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

export default function UnitInput({ unit, setUnit, btnColor }) {
  const setType = type => {
    setUnit({ ...unit, type });
    console.log("setType", type);
  };
  const setName = name => {
    setUnit({ ...unit, name });
    console.log("setName", name);
  };
  const setVisible = () => {
    setUnit({ ...unit, visible: !unit.visible });
    console.log("setVisible", !unit.visible);
  };
  const setColor = color => {
    setUnit({ ...unit, color });
    console.log("setColor", color);
  };
  return (
    <div style={{ display: "inline-flex" }}>
      <div style={{ display: "inline-flex", backgroundColor:"#d8d8dad8", margin:'2px', padding:'4px' }}>
        {/* Выбор типа - реализован Select*/}
        <TypeInput
          btnColor={btnColor}
          listItems={Types}
          defaultItem={unit.type}
          setItem={type => setType(type.value)}
        />
        {/* Выбор цвета - реализован ColorInput*/}
        <ColorInput color={unit.color} setColor={setColor} />
        {/* Видимость - реализован кнопка Visible */}
        <VisibleInput
          onClick={setVisible}
          color={unit.visible ? btnColor.on : btnColor.off}
        />
      </div>
      {/* Заголовок - реализован RowInput */}
      <Name
        label={"Заголовок :"}
        row={unit.name}
        setRow={setName}
        btnColor={btnColor}
      />
    </div>
  );
}
