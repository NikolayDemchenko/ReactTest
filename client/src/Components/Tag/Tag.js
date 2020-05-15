import React, { useState } from "react";
import ReactDOM from "react-dom";
import { StyleContext } from "../ControlPanel/ControlsContext";
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
    <div 
    // style={{border:"1px solid #eee"}}
    >
      {/* {JSON.stringify(unit)} */}
      {controlPanel &&
        ReactDOM.createPortal(
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
          </StyleContext.Provider>,
          document.getElementById("portal")
        )}
      <TagView {...props} setControlPanel={setControlPanel} />
    </div>
  );
};

export default Tag;
