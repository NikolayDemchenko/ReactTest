import React, { useState } from "react";
import "./App.css";
import { ControlsContext } from "./Components/Units/ControlPanel/ControlsContext";
import SwitchTypes from "./Components/Units/Component/SwitchTypes";
import SwitchPanel from "./Components/Units/ControlPanel/SwitchPanels";

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
const num = {
  visible: true,
  value: null,
  unit: text,
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
    align: true,
    size: {
      height: "140px",
      width: "70%"
    },
    index: 0,
    type: "row",
    color: [70, 99, 100, 100],
    visible: true
  },
  name: text,
  value: num
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
  const [controlPanel, setControlPanel] = useState();
  console.log("unit", unit);

  return (
    <ControlsContext.Provider value={{ btnColor, backgroundColor }}>
      {controlPanel ? (
        <SwitchPanel
          controlPanel={controlPanel}
          setControlPanel={setControlPanel}
        />
      ) : null}
      <SwitchTypes
        unit={unit}
        setUnit={setUnit}
        setControlPanel={setControlPanel}
      />
    </ControlsContext.Provider>
  );
};
export default NewApp;
