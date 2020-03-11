import React, { useState } from "react";
import "./App.css";
import { ControlsContext } from "./Components/Units/ControlPanel/ControlsContext";
import Unit from "./Components/Units/Component/Unit";
// import ViewUnit from "./Components/Units/Component/ViewUnit";
import UnitInput from "./Components/Units/ControlPanel/UnitInput";
// import Fonts from "./Components/Units/Class/Fonts";
const baseElement = {
  index: 0,
  name: {
    visible: true,
    value: null,
    font: {
      family: "Verdana",
      size: 50,
      color: [150, 170, 230, 100],
      style: {
        italic: true,
        weight: true,
        decoration: false
      },
      align: "center"
    }
  },
  type: "unit",
  color: [70, 80, 100, 100],
  visible: true
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
  const [panel, setPanel] = useState();
  console.log("unit", unit);
  console.log('panel.text', panel?panel.text:panel)
  return (
    <ControlsContext.Provider value={{ btnColor, backgroundColor }}>
      <div>
        {panel?<UnitInput setPanel={setPanel} unit={unit} panel={panel} setUnit={setUnit} />:null}
        <Unit unit={unit} setUnit={setUnit} setPanel={setPanel} />
      </div>
    </ControlsContext.Provider>
  );
};
export default NewApp;
