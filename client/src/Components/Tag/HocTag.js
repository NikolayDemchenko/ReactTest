import React, { useState, useEffect } from "react";
import { Portal } from "react-portal";
import AttributesPanel from "../ControlPanel/AttributesPanel/AttributesPanel";
import jss from "jss";
import preset from "jss-preset-default";
import log from "../../Log";
export const getParentBranch = (tags, tag, idList = []) => {
  const parentId = tag.parentId;
  if (parentId) {
    idList.push(parentId);
    const parent = tags.find((_tag) => _tag.id === parentId);
    return getParentBranch(tags, parent, idList);
  }
  return idList;
};

const HocTag = (props) => {
  // console.log("props", props);

  const { children, tag } = props;
  const [preview, setPreview] = useState(tag);
  const [func, setFunc] = useState({ styleFilter: (p) => p });
  const [panelTag, setPanelTag] = useState(tag);

  jss.setup(preset());

  const { classes } = jss
    .createStyleSheet({
      [tag.styleId]: tag.style,
    })
    .attach();

  useEffect(() => {
    // console.log("props", props);
    setPreview(tag);
    return () => {
      // console.log("props", props);
    };
  }, [tag]);

  // console.log('tag.styleId \n', tag.styleId)
  // console.log('preview.styleId \n', preview.styleId)
  return (
    <div
      style={{ outline: "1px dashed #5af" }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Portal>
        <AttributesPanel
          {...{ ...props, setPreview, setFunc, panelTag, setPanelTag }}
        />
      </Portal>
      {{
        ...children,
        props: {
          ...props,
          tag: func.styleFilter(preview),
          classes,
        },
      }}
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  // console.log("prevProps.parentBranch", prevProps.parentBranch);
  // console.log("nextProps.parentBranch", nextProps.parentBranch);

  return prevProps.tagsForRender
    ? nextProps.tagsForRender.find((id) => id === nextProps.tag.id)
      ? false
      : true
    : false;
}
export default log(HocTag);
// export default React.memo(HocTag, areEqual);
// export default React.memo(log(HocTag), areEqual);
