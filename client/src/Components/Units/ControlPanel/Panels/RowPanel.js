import React from "react";
import TextPanel from "./TextPanel";
import ControlPanel from "./BasePanel";
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
