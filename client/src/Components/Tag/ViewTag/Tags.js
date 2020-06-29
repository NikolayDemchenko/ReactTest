import React from "react";
import Tag from "./Tag";

function Tags({ tags }) {
  return tags.map((tag, index) => {
    return <Tag key={index} tag={tag} />;
  });
}
export default Tags;