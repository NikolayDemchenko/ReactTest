import React from "react";
import Settings from "./BaseSettings/SettingsPanel";
export default function ControlPanel({
  controlPanel,
  setControlPanel,
  children
}) {console.log("...ControlPanel...");
  const { unit, setUnit } = controlPanel;

  const setSettings = settings => {
    setUnit({ ...unit, settings });
    setControlPanel({ ...controlPanel, unit: { ...unit, settings } });
    // console.log("setSettings", settings);
  };
  return (
    <div style={{ display: "flex",flexWrap: 'wrap', position: "sticky", top: 0 }}>
      <Settings settings={unit.settings} setSettings={setSettings} />
      {children}
    </div>
  );
}
