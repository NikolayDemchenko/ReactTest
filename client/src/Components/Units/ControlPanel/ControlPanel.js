import React from "react";
import Row from "./Text/TextPanel";
import Settings from "./BlockSettings/SettingsPanel";
export default function ControlPanel({
  controlPanel,
  setControlPanel,
  children
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
    <div style={{ display: "flex",flexWrap: 'wrap', position: "sticky", top: 0 }}>
      <Settings settings={unit.settings} setSettings={setSettings} />
      <Row label={"Заголовок :"} text={unit.name} setText={setName} />
      {children}
      {/* <Row label={"Содержимое :"} text={unit.value} setText={setValue} /> */}
    </div>
  );
}
