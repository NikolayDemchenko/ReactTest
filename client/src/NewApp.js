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
    // name: text,
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
  value: "https://1.downloader.disk.yandex.ru/preview/4cc7724c7312fce9f3236733b8f6b0824789547cbcb0e4ed5ef7b1252af81e1d/inf/0OeqJ0KSMb2Z6KUr_bhlMTar4xH-ZRBkZO4oQEso57n8mWP5hpGHhoHM94lSoM-qkhXG_8T3RRbPqn0wZsLUUQ==?uid=28927031&filename=%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%B0_01.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=28927031&size=1263x923"
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

  const [unit, setUnit] = useState(imageElement);
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
