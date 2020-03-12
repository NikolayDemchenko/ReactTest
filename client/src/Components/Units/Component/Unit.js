import React from "react";
import Name from "./Inputs/RowInput";
export default function Unit({
  unit,
  setUnit,
  setTextPanel,
  setSettingsPanel
}) {
  const setName = name => {
    setUnit({ ...unit, name });
    console.log("setName", name);
  };
  const setSettings = settings => {
    setUnit({ ...unit, settings });
    console.log("setName", settings);
  };

  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
    const backColor = parseColor(unit.settings.color);

  return (
    <div
      style={{
        height:'140px',
        width: "100%",        
        // color: fontColor,
        backgroundColor: backColor
      }}
      onClick={() => setSettingsPanel({ settings: unit.settings, setSettings })}
    >
      <Name text={unit.name} setText={setName} setPanel={setTextPanel} />
    </div>
  );
}
