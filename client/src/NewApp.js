import React, { useState } from "react";
import "./App.css";
import { StyleContext } from "./Components/Units/ControlPanel/ControlsContext";
import Tag from "./Components/Units/Component/Types/Tag";
import { div } from "./Components/Units/Component/Types/Classes";
import VerticalPanel from "./Components/Units/ControlPanel/VerticalPanel/VerticalPanel";

const NewApp = () => {
  console.log("!!!NewApp!!!");

  const [preview, setPreview] = useState();
  // console.log('preview', preview)
  const [unit, setUnit] = useState(div);
  const [controlPanel, setPanel] = useState();
  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDraggedProp] = useState();
  const setControlPanel=(style)=>{
console.log('style', style)
    setPanel(style)
  }
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
      <Tag
        unit={preview ? preview : unit}
        setUnit={setUnit}
        setControlPanel={setControlPanel}
      />
      {/* {JSON.stringify(unit)} */}
    </div>
  );
};

export default NewApp;
