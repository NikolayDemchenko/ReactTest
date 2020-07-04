import React from "react";
import Tag from "./Tag";

function Tags({ tags, page }) {
  return tags.map((tag, index) => {
    return <Tag key={index} tag={tag} page={page} />;
  });
}
export default React.memo(Tags);
