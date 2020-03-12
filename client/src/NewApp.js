import React, { useState } from "react";
import "./App.css";
import { ControlsContext } from "./Components/Units/ControlPanel/ControlsContext";
import Unit from "./Components/Units/Component/Unit";
// import ViewUnit from "./Components/Units/Component/ViewUnit";
import ControlPanel from "./Components/Units/ControlPanel/ControlPanel";
// import Fonts from "./Components/Units/Class/Fonts";
const text = {
  visible: true,
  value: null,
  align: "center",
  color: [70, 80, 100, 100],
  font: {
    family: "Verdana",
    size: 50,
    color: [150, 170, 230, 100],
    style: {
      italic: true,
      weight: true,
      decoration: false
    }
  }
};
const baseElement = {
  settings: {
    index: 0,
    type: "unit",
    color: [70, 99, 100, 100],
    visible: true
  },
  name: text
};
const NewApp = () => {
  const _on = 10;
  const _off = 100;
  const _active = 80;

  const btnColor = {
    on: [_on, _on, _on],
    active: [_active, _active, _active],
    off: [_off, _off, _off]
  };
  const backgroundColor = "#d8d8dad8";
  const [unit, setUnit] = useState(baseElement);
  const [textPanel, setTextPanel] = useState();
  const [settingsPanel, setSettingsPanel] = useState();
  console.log("unit", unit);
  console.log("panel.text", textPanel ? textPanel.text : textPanel);
  return (
    <ControlsContext.Provider value={{ btnColor, backgroundColor }}>
      <div>
        <ControlPanel
          textPanel={textPanel}
          setTextPanel={setTextPanel}
          settingsPanel={settingsPanel}
          setSettingsPanel={setSettingsPanel}
          unit={unit}
          setUnit={setUnit}
        />
        <Unit
          unit={unit}
          setUnit={setUnit}
          setTextPanel={setTextPanel}
          setSettingsPanel={setSettingsPanel}
        />
      </div>
    </ControlsContext.Provider>
  );
};
export default NewApp;
