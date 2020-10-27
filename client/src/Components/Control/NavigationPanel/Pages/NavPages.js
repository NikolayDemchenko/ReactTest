import React from "react";
import Page from "./NavPage";
function NavPages(props) {
  return props.pages.map((page, index) => {
    return <Page {...props} key={index} page={page} />;
  });
}
export default NavPages;