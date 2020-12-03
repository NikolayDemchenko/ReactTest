import React from "react";
import log from "../../../../Log";
import Tag from "./Tag";
// import HocTag from "./HocTag";
function Tags(props) {
  // console.log("props", props);
  return props.tagTree.map((tag, key) => {
    return (
      <div
        key={key}
        style={{ outline:props.selectedId === tag.id && "1px dashed #5af" }}
      >
        <Tag {...{ ...props,  tag }} />
      </div>
    );
  });
}
export default log(Tags);
