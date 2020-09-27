import React from "react";
import log from "../../../../Log";
import Tag from "./Tag";
import HocTag, { getParentBranch } from "./HocTag";
function Tags(props) {
  // console.log("props", props); 
  return props.tags.map((tag, key) => {
    return props.selectedId !== tag.id ? (
      <div
        key={key}
        onClick={(e) => {
          e.stopPropagation();
          props.setSettings((state) => ({
            ...state,
            selectedId: tag.id,
            tagsForRender: [...getParentBranch(props.page.tags, tag), tag.id],
          }));
        }}
      >
        <Tag {...{ ...props, className: props.classes[tag.styleId], tag }} />
      </div>
    ) : (
      <HocTag {...{ ...props, tag, key }}>
        <Tag />
      </HocTag>
    );
  });
}
export default log(Tags);
