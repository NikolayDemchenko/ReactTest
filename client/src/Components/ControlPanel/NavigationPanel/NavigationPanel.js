import React, { useState } from "react";
import NavTags from "./NavTags";
import jss from "jss";
import preset from "jss-preset-default";
function NavigationPanel(props) {
 
  const style = {
    // flexWrap: "wrap",
    minWidth: "280px",
    maxWidth: "280px",
    maxHeight: "95vh",
    overflowY: "auto",
    // fontSize:"16px",
    position: "fixed",
    top: "20px",
    left: 0,
    zIndex: 999,
    // backgroundColor: "#456",
    color: "rgba(140, 200, 255, 0.8)",
    boxShadow: "2px 10px 5px 2px #00000055",
    "&::-webkit-scrollbar": { width: "20px" },
    "&::-webkit-scrollbar-thumb": { backgroundColor: "#567" },
  };
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();

  const [showPanel, setShowPanel] = useState(false);
  const [selected, setSelected] = useState();
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          backgroundColor: "#456c",
          maxWidth: "100px",
          display: "flex",
          justifyContent: "center",
          padding: "0 10px",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log("setShowPanel");
          setShowPanel(!showPanel);
        }}
      >
        Navigation
      </div>
      {showPanel && (
        <div className={classes.style}>
          <NavTags {...props} selected={selected} setSelected={setSelected} />
        </div>
      )}
    </div>
  );
}
export default NavigationPanel;
