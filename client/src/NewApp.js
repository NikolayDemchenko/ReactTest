import React, { useState } from "react";
import "./App.css";
// import PanelUnit from "./Components/Units/Component/Unit";
// import ViewUnit from "./Components/Units/Component/ViewUnit";
import UnitInput from './Components/Units/ControlPanel/UnitInput'
const baseElement = {
  index: 0,
  name: { visible: true, value: null },
  type: "unit",
  bColor: "grey",
  color: [250, 170, 230, 1],
  visible: true
};
const NewApp = () => {
  const _on = 255;
  const _off = 80;
  const _active = 40;
  const btnColor = {
    on: [_on, 40, 250],
    active: [_active, 80, _active],
    off: [_off, _off, _off]
  };
  const [unit, setUnit] = useState(baseElement);
  // const [panel, setPanel] = useState(baseElement);
  console.log('unit', unit)
  return (
    <div>
      <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
        <UnitInput unit={unit} setUnit={setUnit} btnColor={btnColor}/>
      </div>
    </div>
  );
};
export default NewApp;
