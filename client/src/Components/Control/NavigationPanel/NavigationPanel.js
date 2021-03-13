import React, { useState, useContext } from "react";
import PageList from "./Pages/PageList";
import jss from "jss";
import preset from "jss-preset-default";
import { Context } from "../../../AppFunction";
import { log, funcLog } from "../../../Log";
import Application from "./Applications/Application";
function NavigationPanel({ updatePage }) {
  const {
    state: { page },
  } = useContext(Context);
  const [selection, setSelection] = useState(page.name);
  // console.log('selection', selection);

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
  const { classes } = jss.createStyleSheet({ style }).attach();
  return (
    <div className={classes.style}>
      <Application {...{ selection, setSelection }} />
      Pages: <PageList {...{ selection, setSelection, updatePage }} />
    </div>
  );
}
export default log(NavigationPanel);
// export default NavigationPanel;
