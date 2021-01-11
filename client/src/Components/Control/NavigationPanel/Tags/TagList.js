import React, { useContext } from "react";
import NavTag from "./NavTag";
import { Context } from "../../../../AppFunction";

function TagList() {
  const { tagTree,page } = useContext(Context);
  const nodes = page.nodes.filter(({ parentId }) => parentId === null);
  return <NavTags {...{ tagTree, nodes }} />;
}
function NavTags(props) {
  return props.nodes.map((node, index) => {
    return <NavTag  key={index} node={node} />;
  });
}
export { TagList, NavTags };
