import React from "react";
import Tag from "./Tag";
function Tags(props) {
  return props.tags.map((tag, index) => {
    return <Tag {...props} key={index} tag={tag} />;
  });
}
export default Tags;