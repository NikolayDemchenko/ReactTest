import React, { useState } from "react";
import { StyleContext } from "../ControlPanel/ControlsContext";
import { div } from "./Classes";
import VerticalPanel from "../ControlPanel/VerticalPanel/VerticalPanel";
import TagView from "./TagView";

const Tag = (props) => {
  
  const [controlPanel, setPanel] = useState();
  const [selected, setSelect] = useState("All style");
  const [draggedProp, setDragdProp] = useState();

  // console.log("controlPanel", controlPanel);

  const setControlPanel = (item) => {
    // console.log("setControlPanel!!!");
    setPanel(item);
  };
  const setSelected = (item) => {
    // console.log("setSelected!!!");
    setSelect(item);
  };
  const setDraggedProp = (item) => {
    // console.log("setDraggedProp!!!");
    setDragdProp(item);
  };

  // console.log("!!!Tag!!!");
  return (
    <div>
      {/* {JSON.stringify(unit)} */}
      {controlPanel && (
        // ReactDOM.createPortal
        <div id="controlPanel">
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
        </div>
        // ,document.getElementById("portal")
      )}
      <TagView
      {...props}
      //  tag={tag} setTag={setTag} 
       setControlPanel={setControlPanel} />
    </div>
  );
};

export default Tag;
