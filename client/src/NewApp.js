import React, { useState } from "react";
import "./App.css";
import { ControlsContext } from "./Components/Units/ControlPanel/ControlsContext";
import TypeSwitch from "./Components/Units/Component/Types/TypeSwitch";
import {
  // baseType,
  // rowType,
  // docType,
  // imageType,
  // keyValueType,
  div
} from "./Components/Units/Component/Types/Classes";
import VerticalPanel from "./Components/Units/ControlPanel/VerticalPanel/VerticalPanel";







const NewApp = () => {
  // console.log("!!!NewApp!!!");
// console.log('div', div)

  const _on = 10;
  const _off = 100;
  const _active = 80;

  const btnColor = {
    on: [_on, _on, _on],
    active: [_active, _active, _active],
    off: [_off, _off, _off]
  };
  const backgroundColor = "#d8d8dad8";

  const [preview, setPreview] = useState();
  // console.log('preview', preview)
  const [unit, setUnit] = useState(div);
  const [controlPanel, setControlPanel] = useState();
  const [selected, setSelected] = useState("All style");
  // console.log('selected', selected)
  const setPanel = panel => {
    // console.log("panel", panel);
    setControlPanel(panel);
  };

  // console.log("!!!!!unit", unit);
// console.log('controlPanel.unit',controlPanel? controlPanel.unit:null)
  return (
    <ControlsContext.Provider value={{ btnColor, backgroundColor }}>    
      {controlPanel ? (<VerticalPanel controlPanel={controlPanel} setControlPanel={setPanel} setPreview={setPreview}
      selected={selected} setSelected={setSelected} /> ) : null}
        <TypeSwitch unit={preview?preview:unit} setUnit={setUnit} setControlPanel={setPanel} />  
      {/* {JSON.stringify(unit)} */}
    </ControlsContext.Provider>
  );
};

export default NewApp;
