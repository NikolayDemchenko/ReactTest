import React from "react";
import Settings from "./SettingsPanel";
export default function BasePanel({
  controlPanel,
  setControlPanel,
  children
}) {
  console.log("...BasePanel...",controlPanel);
  return (
    <div style={{ display: "flex",flexWrap: 'wrap', position: "sticky", top: 0 }}>
      <Settings controlPanel={controlPanel} setControlPanel={setControlPanel} />
      {children}
    </div>
  );
}
