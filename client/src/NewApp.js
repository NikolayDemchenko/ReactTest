import React, { useState } from "react";
import "./App.css";
import { ControlsContext } from "./Components/Units/ControlPanel/ControlsContext";
import SwitchTypes from "./Components/Units/Component/SwitchTypes";
import SwitchPanel from "./Components/Units/ControlPanel/SwitchPanels";

const text = {
  visible: true,
  value: null,
  align: "center",
  color: [70, 80, 100, 0],
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

const rowElement = {
  settings: { 
    size: {
      height: "140px",
      width: "70%"
    },
    index: 0,
    type: "row",
    color: [70, 99, 100, 100],
    visible: true
  },
  value: text
};
const docElement = {
  settings: { 
    size: {
      height: "340px",
      width: "70%"
    },
    index: 0,
    type: "doc",
    color: [70, 99, 100, 100],
    visible: true
  },
  value: text
};
const imageElement = {
  settings: {   
    align: true,
    size: {
      height: "140px",
      width: "70%"
    },
    index: 0,
    type: "img",
    color: [70, 99, 100, 100],
    visible: true
  },
  value: 'https://avatars.mds.yandex.net/get-pdb/245485/4f6cb872-2c1d-4ad9-9e51-6f2334f8f074/s1200'
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

  const [unit, setUnit] = useState(docElement);
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
