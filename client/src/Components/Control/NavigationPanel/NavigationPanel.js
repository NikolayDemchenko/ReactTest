import React, { useState, useContext, useEffect } from "react";
import { TagList } from "./Tags/TagList";
import AppList from "./Apps/AppList";
import PageList from "./Pages/PageList";
import PopupInputsForm from "../Inputs/ModalInput/PopupInput/PopupInputsForm";
import SelectPanel from "../Inputs/ModalInput/SelectPanel/SelectPanel";
import jss from "jss";
import { fileTextO } from "react-icons-kit/fa/fileTextO";
import { save } from "react-icons-kit/fa/save";
import { map } from "react-icons-kit/icomoon/map";
import { folderOpen } from "react-icons-kit/icomoon/folderOpen";
import { navicon } from "react-icons-kit/fa/navicon";
import Icon from "react-icons-kit";
import preset from "jss-preset-default";
import SavePage from "./Pages/SavePage";
import { NavigationContext } from "../../../AppFunction";
import RotatingArrow from "./RotatingArrow";
import { log, funcLog } from "../../../Log";
import { buttonStyle } from "../Styles/BtnStyle";
function NavigationPanel() {
  const {
    state,
    setState,
    RESTManager: { createPage, updatePage, getPagesByAppName, getApps },
  } = useContext(NavigationContext);
  const { page } = state;
  // console.log('props', props)
  const style = {
    minWidth: "280px",
    maxWidth: "280px",
    maxHeight: "95vh",
    overflowY: "auto",
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

  return (    
        <div className={classes.style}>
          <PageList />
          {/* {page && <TagList />} */}
        </div>   
  );
}
export default log(NavigationPanel);
// export default NavigationPanel;
