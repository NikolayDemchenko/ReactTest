import React, { useContext } from "react";
import Row from "./TextPanel";
import Settings from "./SettingsPanel";
export default function UnitInput({
  controlPanel,
  setControlPanel
}) {
  const { unit, setUnit } = controlPanel;
  const setName = name => {
    setUnit({ ...unit, name });
    setControlPanel({ ...controlPanel, unit: { ...unit, name } });
    console.log("setText", name);
  };
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ ...controlPanel, unit: { ...unit, value } });
    console.log("setValue", value);
  };
  const setSettings = settings => {
    setUnit({ ...unit, settings });
    setControlPanel({ ...controlPanel, unit: { ...unit, settings } });
    console.log("setSettings", settings);
  };
  return (
    <div style={{ display: "inline-flex" }}>
      <Settings settings={unit.settings} setSettings={setSettings} />
      <Row label={"Заголовок :"} text={unit.name} setText={setName} />
      <Row label={"Содержимое :"} text={unit.value} setText={setValue} />
    </div>
  );
}
