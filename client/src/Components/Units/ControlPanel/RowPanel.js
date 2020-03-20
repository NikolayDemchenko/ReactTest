import React from "react";
import TextPanel from "./TextSettings/TextPanel";
import ControlPanel from "./ControlPanel";
export default function RowPanel({ controlPanel, setControlPanel }) {
  const { unit, setUnit } = controlPanel;
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ ...controlPanel, unit: { ...unit, value } });
    console.log("setValue", value);
  };
  return (
    <ControlPanel controlPanel={controlPanel} setControlPanel={setControlPanel}>
      <TextPanel label={"Содержимое :"} text={unit.value} setText={setValue} />
    </ControlPanel>
  );
}
