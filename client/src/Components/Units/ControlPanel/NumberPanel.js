import React from "react";
import Row from "./TextSettings/TextPanel";
import ControlPanel from "./ControlPanel";
export default function NumberPanel({ controlPanel, setControlPanel }) {
  const { unit, setUnit } = controlPanel;
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ ...controlPanel, unit: { ...unit, value } });
    console.log("setValue", value);
  };
  const setUnitValue = un => {
    setUnit({ ...unit, value:{...unit.value,unit:un} });
    setControlPanel({ ...controlPanel, unit: { ...unit, value:{...unit.value,unit:un} } });
    console.log("setUnitValue", un);
  };
  return (
    <ControlPanel controlPanel={controlPanel} setControlPanel={setControlPanel}>
      <Row label={"Содержимое :"} text={unit.value} setText={setValue} />
      <Row label={"Ед. изм :"} text={unit.value.unit} setText={setUnitValue} />
    </ControlPanel>
  );
}