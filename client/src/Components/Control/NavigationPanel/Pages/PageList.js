import React from "react";
import NavPage from "./NavPage";
function NavPages(props) {
  const pageList = props.settings&&props.settings.pageList ? props.settings.pageList : [];
  return pageList.map((page, index) => {
    return <NavPage {...props} key={index} page={page} />;
  });
}
export default NavPages;