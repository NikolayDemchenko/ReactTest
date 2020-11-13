import React from "react";
import Tag from "./NavTag";
function NavTags(props) {
  return props.tagTree.map((tag, index) => {
    return <Tag {...props} key={index} tag={tag} />;
  });
}
export default NavTags;