import React, { useState } from "react";
import { StyleContext } from "./ControlPanel/ControlsContext";
import { div } from "./Types/Classes";
import VerticalPanel from "./ControlPanel/VerticalPanel/VerticalPanel";
import Preview from "./Preview";
const NewApp = () => {

  const [tag, setTag] = useState(div);
  const [controlPanel, setPanel] = useState();
  const [selected, setSel] = useState("All style");
  const [draggedProp, setDragProp] = useState();
  const setControlPanel = (item) => {
    // console.log("setControlPanel!!!");
    setPanel(item);
  };
  const setSelected = (item) => {
    // console.log("setSelected!!!");
    setSel(item);
  };
  const setDraggedProp = (item) => {
    // console.log("setDraggedProp!!!");
    setDragProp(item);
  };


  console.log("!!!NewApp!!!");
  return (
    <div>
      {/* {JSON.stringify(unit)} */}
      {controlPanel && (
        <StyleContext.Provider
          value={{
            controlPanel,
            setControlPanel,
            selected,
            setSelected,
            draggedProp,
            setDraggedProp,
          }}
        >
          <VerticalPanel />
        </StyleContext.Provider>
      )}
      <Preview tag={tag} setTag={setTag} setControlPanel={setControlPanel} />
    </div>
  );
};

export default NewApp;
