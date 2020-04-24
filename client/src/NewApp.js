import React, { useState } from "react";
import "./App.css";
import { StyleContext } from "./Components/Units/ControlPanel/ControlsContext";
import TypeSwitch from "./Components/Units/Component/Types/TypeSwitch";
import {
  // baseType,
  // rowType,
  // docType,
  // imageType,
  // keyValueType,
  div,
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
    off: [_off, _off, _off],
  };
  const backgroundColor = "#d8d8dad8";

  const [preview, setPreview] = useState();
  // console.log('preview', preview)
  const [unit, setUnit] = useState(div);
  const [controlPanel, setPanel] = useState();
  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDraggedProp] = useState();
  // console.log('selected', selected)
  const setControlPanel = (panel) => {
    // console.log("panel", panel);
    setPanel(panel);
  };
  console.log("draggedProp", draggedProp);
  // console.log("!!!!!unit", unit);
  console.log('controlPanel.unit',controlPanel? controlPanel.unit:null)
  return (
    <div>
      {controlPanel ? (
        <StyleContext.Provider
          value={{
            controlPanel,
            setControlPanel,
            setPreview,
            selected,
            setSelected,
            draggedProp,
            setDraggedProp,
          }}
        >
          <VerticalPanel />
        </StyleContext.Provider>
      ) : null}
      <TypeSwitch
        unit={preview ? preview : unit}
        setUnit={setUnit}
        setControlPanel={setPanel}
      />
      {/* {JSON.stringify(unit)} */}
    </div>
  );
};

export default NewApp;
