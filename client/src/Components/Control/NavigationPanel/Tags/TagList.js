import React, { useContext } from "react";
import NavTag from "./NavTag";
import { Context } from "../../../../AppFunction";

function TagList() {
  const { tagTree } = useContext(Context);
  return <NavTags {...{ tagTree }} />;
}
function NavTags(props) {
  return props.tagTree.map((tag, index) => {
    return <NavTag  key={index} tag={tag} />;
  });
}
export { TagList, NavTags };
