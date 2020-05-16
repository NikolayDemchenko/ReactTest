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

  console.log("1-Tag!!!");
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

function areEqual(prevProps, nextProps) {
  // console.log('prevProps', prevProps)
  // console.log('nextProps', nextProps)
  // prevProps.tag===nextProps.tag?console.log("%cравно", 'border:solid 1px #e33; color: #333'):console.log("%cне равно", 'color: #f33')
 return prevProps.tag===nextProps.tag?true:false
  }
export default React.memo(Tag,areEqual);
// export default Tag;
