import React from "react";
import log from "../../Log";
import Element from "./Tag";
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
            tagsForRender: [...getParentBranch(props.component.tags, tag), tag.id],
          }));
        }}
      >
        <Element {...{ ...props, tag }} />
      </div>
    ) : (
      <HocTag {...{ ...props, tag, key }}>
        <Element />
      </HocTag>
    );
  });
}
export default log(Tags);
