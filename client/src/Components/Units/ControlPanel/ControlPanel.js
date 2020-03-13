import React, { useContext } from "react";
import Name from "./TextInput";
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
  const setSettings = settings => {
    setUnit({ ...unit, settings });
    setControlPanel({ ...controlPanel, unit: { ...unit, settings } });
    console.log("setSettings", settings);
  };
  return (
    <div style={{ display: "inline-flex" }}>
      <Settings settings={unit.settings} setSettings={setSettings} />
      <Name label={"Текст :"} text={unit.name} setText={setName} />
    </div>
  );
}
