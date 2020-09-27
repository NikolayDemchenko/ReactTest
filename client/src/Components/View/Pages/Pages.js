import React from "react";
import log from "../../../../Log";
import Page from './Page'
function Pages(props) {
  // console.log("props", props);
  return props.pages.map((page, key) => {
    return <Page {...{page, key}}/>;
  });
}
export default log(Pages);