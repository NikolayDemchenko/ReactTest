import React, { useState } from "react";
import { StyleContext } from "./ControlPanel/ControlsContext";
import Tag from "./Component/Types/Tag";
import { div } from "./Component/Types/Classes";
import VerticalPanel from "./ControlPanel/VerticalPanel/VerticalPanel";
import Preview from "./Preview";
const NewApp = () => {
  console.log("!!!NewApp!!!");

  // const [preview, setPreview] = useState();
  // console.log('preview', preview)
  const [tag, setTag] = useState(div);
  const [controlPanel, setPanel] = useState();
  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDraggedProp] = useState();
  const setControlPanel = (style) => {
    console.log("style", style);
    setPanel(style);
  };
  console.log(
    "controlPanel.setPreview",
    controlPanel && controlPanel.setPreview
  );
  return (
    <div>
      {/* {controlPanel && (
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
      )}
      <Tag
        unit={preview ? preview : unit}
        setUnit={setUnit}
        setControlPanel={setControlPanel}
      />
      {JSON.stringify(unit)} */}
      {controlPanel && (
        <StyleContext.Provider
          value={{
            controlPanel,
            setControlPanel,
            selected,
            setPreview: controlPanel.setPreview,
            setSelected,
            draggedProp,
            setDraggedProp,
          }}
        >
          <VerticalPanel />
        </StyleContext.Provider>
      )}
      <Preview
        tag={tag}
        setTag={setTag}
        setControlPanel={setControlPanel}
      />
    </div>
  );
};

export default NewApp;
