import React from "react";
import NavPage from "./NavPage";
function NavPages(props) {
  return props.pages.map((page, index) => {
    return <NavPage {...props} key={index} page={page} />;
  });
}
export default NavPages;