import React from "react";
import log from "../../../Log";
import Tags from "./Tag/Tags";
import jss from "jss";

function Page({settings, bodyStyle ,classes, tagTree, setSettings }) {
  // console.log("page-App");

  document.querySelector("body").className = jss
    .createStyleSheet({ bodyStyle })
    .attach().classes.bodyStyle;

  return <Tags {...{ settings, setSettings, tagTree, classes }} />;
}
export default log(Page);