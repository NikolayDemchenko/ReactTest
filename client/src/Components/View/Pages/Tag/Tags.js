import React from "react";
import log from "../../../../Log";
import Tag from "./Tag";
// import HocTag from "./HocTag";
function Tags(props) {
  // console.log("props", props);
  return props.tags.map((tag, key) => {
    return (
      <div
        key={key}
        style={{ outline: props.clickedId === tag.id && "1px dashed #5af" }}
      >
        <Tag {...{ ...props, className: props.classes[tag.styleId], tag }} />
      </div>
    );
  });
}
export default log(Tags);
