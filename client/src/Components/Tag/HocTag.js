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
  console.log("props", props);

  let {assignableStyle,changeTag, children, tag, classes: allClasses } = props;

  
  const [preview, _setPreview] = useState(tag);



  const [func, setFunc] = useState({ styleFilter: (p) => p });
  const [panelTag, _setPanelTag] = useState(preview);

  

  const setPreview = (preview) => {
    // console.log("setPreview :>> ", preview.style);
    _setPreview(preview);
  };
  const setPanelTag = (tag) => {
    // console.log("setPanelTag :>> ", tag.style);
    _setPreview(tag);
    _setPanelTag(tag);
  };
  // console.log('panelTag.style :>> ', panelTag.style);
  // console.log('preview.style :>> ', preview.style);
  // console.log("func.styleFilter(preview)", func.styleFilter(preview));

  jss.setup(preset());

  const { classes } = jss
    .createStyleSheet({
      [tag.styleId]: func.styleFilter(preview).style,
    })
    .attach();

  useEffect(() => {
    // console.log("props", props);
    assignableStyle&&assignableStyle!==tag.styleId&&setPreview(changeTag(tag,"styleId",assignableStyle))
    // setPreview(tag);
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
        props: { ...props, classes: { ...allClasses, ...classes } },
      }}
    </div>
  );
};

export default log(HocTag);
