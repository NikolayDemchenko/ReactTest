import React, { useState } from "react";
import "./App.css";
import { ControlsContext } from "./Components/Units/ControlPanel/ControlsContext";
import TypeSwitch from "./Components/Units/Component/TypeSwitch";
import PanelSwitch from "./Components/Units/ControlPanel/PanelSwitch";

const text = {
  visible: true,
  value: null,
  align: "center",
  // color: [70, 80, 100, 0],
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
  value:
  "https://avatars.mds.yandex.net/get-pdb/245485/4f6cb872-2c1d-4ad9-9e51-6f2334f8f074/s1200"
};
const keyValue = { key: rowElement, value: docElement };
const keyValueElement = {
  settings: {
    size: {
      height: "140px",
      width: "70%"
    },
    index: 0,
    type: "kv",
    color: [70, 99, 100, 100],
    visible: true
  },
  value: keyValue
};
const NewApp = () => {
  console.log("!!!NewApp!!!");
  const _on = 10;
  const _off = 100;
  const _active = 80;

  const btnColor = {
    on: [_on, _on, _on],
    active: [_active, _active, _active],
    off: [_off, _off, _off]
  };
  const backgroundColor = "#d8d8dad8";

  const [unit, setUnit] = useState(keyValueElement);
  const [controlPanel, setControlPanel] = useState();
  console.log("unit", unit);
console.log('controlPanel', controlPanel)
  return (
    <ControlsContext.Provider value={{ btnColor, backgroundColor }}>
      {controlPanel ? (
        <PanelSwitch
          controlPanel={controlPanel}
          setControlPanel={setControlPanel}
        />
      ) : null}
      <TypeSwitch
        unit={unit}
        setUnit={setUnit}
        setControlPanel={setControlPanel}
      />
    </ControlsContext.Provider>
  );
};
export default NewApp;
