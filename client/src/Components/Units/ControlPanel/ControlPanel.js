import React from "react";
// import Name from "./Text/TextPanel";
import Settings from "./BlockSettings/SettingsPanel";
export default function ControlPanel({
  controlPanel,
  setControlPanel,
  children
}) {
  const { unit, setUnit } = controlPanel;
  // const setName = name => {
  //   setUnit({ ...unit, settings: { ...unit.settings, name } });
  //   setControlPanel({ ...controlPanel, unit: { ...unit, settings: { ...unit.settings, name } } });
  //   console.log("setText", name);
  // };
  const setSettings = settings => {
    setUnit({ ...unit, settings });
    setControlPanel({ ...controlPanel, unit: { ...unit, settings } });
    console.log("setSettings", settings);
  };
  return (
    <div style={{ display: "flex",flexWrap: 'wrap', position: "sticky", top: 0 }}>
      <Settings settings={unit.settings} setSettings={setSettings} />
      {/* <Name label={"Заголовок :"} text={unit.settings.name} setText={setName} /> */}
      {children}
    </div>
  );
}
