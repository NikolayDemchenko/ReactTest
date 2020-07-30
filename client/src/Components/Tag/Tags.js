import React from "react";
import log from "../../Log";
import Element from "./Element";
import HocTag, { getParentBranch } from "./HocTag";
function Tags(props) {
  // console.log("props", props);
  return props.tags.map((tag, key) => {
    return props.selectedId ? (
      props.selectedId != tag.id ? (
        <div
          key={key}
          onClick={(e) => {
            e.stopPropagation();
            // console.log("tag.id", tag.id);
            props.setSettings({
              selectedId: tag.id,
              tagsForRender: [...getParentBranch(props.page.tags, tag), tag.id],
            });
          }}
        >
          <Element {...{ ...props, tag }} />
        </div>
      ) : (
        <HocTag {...{ ...props, tag, key }}>
          <Element />
        </HocTag>
      )
    ) : (
      <div
        key={key}
        onClick={(e) => {
          e.stopPropagation();
          // console.log("tag.id", tag.id);
          props.setSettings({
            selectedId: tag.id,
            tagsForRender: [...getParentBranch(props.page.tags, tag), tag.id],
          });
        }}
      >
        <Element {...{ ...props, tag }} />
      </div>
    );
  });
}
export default log(Tags);
