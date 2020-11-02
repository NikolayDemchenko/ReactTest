import React from "react";
import log from "../../../Log";
import Tags from "./Tag/Tags";
import jss from "jss";

function Page({ page: {bodyStyle },classes, tags, clickedId, setClickedId }) {
  // console.log("page-App");

  document.querySelector("body").className = jss
    .createStyleSheet({ bodyStyle })
    .attach().classes.bodyStyle;

  return <Tags {...{ clickedId, setClickedId, tags, classes }} />;
}
export default log(Page);