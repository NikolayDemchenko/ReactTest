import React, { useState } from "react";
import "./App.css";
import { ControlsContext } from "./Components/Units/ControlPanel/ControlsContext";
import TypeSwitch from "./Components/Units/Component/TypeSwitch";
import PanelSwitch from "./Components/Units/ControlPanel/PanelSwitch";
import {keyValue,rowElement,docElement,imageElement,keyValueElement} from './Components/Units/Component/Types/Classes'

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

  const [unit, setUnit] = useState(keyValue);
  const [controlPanel, setControlPanel] = useState();
const setPanel=(panel)=>{
  console.log('panel', panel)
  setControlPanel(panel)
}


  console.log("unit", unit);
  console.log("controlPanel", controlPanel);


  return (
    <ControlsContext.Provider value={{ btnColor, backgroundColor }}>
      {controlPanel ? (
        <PanelSwitch
          controlPanel={controlPanel}
          setControlPanel={setPanel}
        />
      ) : null}
      <TypeSwitch
        unit={unit}
        setUnit={setUnit}
        setControlPanel={setPanel}
      />
    </ControlsContext.Provider>
  );
};
export default NewApp;
