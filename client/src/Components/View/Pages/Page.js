import React from "react";
import log from "../../../Log";
import Tags from "./Tag/Tags";
import jss from "jss";

function Page({selectedId, bodyStyle ,classes, tagTree, onClick }) {
  // console.log("page-App");

  document.querySelector("body").className = jss
    .createStyleSheet({ bodyStyle })
    .attach().classes.bodyStyle;

  return <Tags {...{ selectedId, onClick, tagTree, classes }} />;
}
export default log(Page);