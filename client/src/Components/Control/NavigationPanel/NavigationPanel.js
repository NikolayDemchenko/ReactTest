import React, { useState } from "react";
import NavTags from "./Tags/NavTags";
import AppList from "./Apps/AppList";
import NavPages from "./Pages/NavPages";
import ModalInput from "../ModalWindows/ModalInput/ModalInput";
import CreateAppForm from "../ModalWindows/ModalInput/CreateAppForm";
import jss from "jss";
import preset from "jss-preset-default";
import SavePage from "./Pages/SavePage";
function NavigationPanel(props) {
  const {
    pageManager: {createApp, createPage, updatePage },
  } = props;
  // console.log('props', props)
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

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        backgroundColor: "#456c",
        display: "flex",
        justifyContent: "center",
        padding: "0 10px",
        cursor: "pointer",
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          console.log("setShowPanel");
          setShowPanel(!showPanel);
        }}
      >
        Navigation
      </div>

      <SavePage
        savePage={updatePage}
        title={"Save"}
        pageId={props.pageId}
      />
      <ModalInput setItem={createPage}>
        <div
          style={{
            backgroundColor: "#456c",
            justifyContent: "center",
            padding: "0 10px",
            cursor: "pointer",
          }}
        >
          Save as
        </div>
      </ModalInput>
      <CreateAppForm setItem={createApp}>
        <div
          style={{
            backgroundColor: "#456c",
            justifyContent: "center",
            padding: "0 10px",
            cursor: "pointer",
          }}
        >
          New App
        </div>
      </CreateAppForm>
      {showPanel && (
        <div className={classes.style}>
          <AppList {...props} />
          <NavTags {...props} />
          {/* <NavPages {...props} /> */}
        </div>
      )}
    </div>
  );
}
export default NavigationPanel;
