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
  const setPanel = panel => {
    // console.log("panel", panel);
    setControlPanel(panel);
  };

  // console.log("!!!!!unit", unit);

  return (
    <ControlsContext.Provider value={{ btnColor, backgroundColor }}>
      <div style={{ display: "flex" }}>
      {controlPanel ? (<VerticalPanel controlPanel={controlPanel} setControlPanel={setPanel} setPreview={setPreview} /> ) : null}
        <TypeSwitch unit={preview?preview:div} setUnit={setUnit} setControlPanel={setPanel} />
      </div>
      {JSON.stringify(unit)}
    </ControlsContext.Provider>
  );
};

export default NewApp;
