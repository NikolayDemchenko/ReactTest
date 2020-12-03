import React,{useContext} from "react";
import NavPage from "./NavPage";
import { Context } from "../../../../AppFunction";
function NavPages() {
  const { settings } = useContext(Context);
  const pageList = settings&&settings.pageList ? settings.pageList : [];
  return pageList.map((page, index) => {
    return <NavPage  key={index} page={page} />;
  });
}
export default NavPages;