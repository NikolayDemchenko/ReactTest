import React, { useState, useEffect } from "react";
import { Portal } from "react-portal";
import AttributesPanel from "../../../../Control/AttributesPanel/AttributesPanel";
import jss from "jss";
import preset from "jss-preset-default";
import log from "../../../../../Log";
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
  const {
    component: { styles },
    assignableStyle,
    changeTag,
    children,
    tag,
    classes: allClasses,
  } = props;

  // console.log("tag", tag);

  const style = styles.find(({ id }) => id === tag.styleId).style;
  const thisTag = { ...tag, style };

  const [preview, _setPreview] = useState(thisTag);

  const [styleView, setStyleView] = useState({ styleViewFilter: (p) => p });
  const [panelTag, _setPanelTag] = useState(preview);

  const setPreview = ({ style }) => {
    // console.log("setPreview :>> ", style);
    _setPreview((tag) => ({ ...tag, style }));
  };
  const setPanelTag = (tag) => {
    // console.log("setPanelTag :>> ", tag.style);
    setPreview(tag);
    _setPanelTag(tag);
  };

  jss.setup(preset());

  const { classes } = jss
    .createStyleSheet({
      [tag.styleId]: styleView.styleViewFilter(preview).style,
    })
    .attach();

  useEffect(() => {
    assignableStyle &&
      assignableStyle !== tag.styleId &&
      changeTag(tag, "styleId", assignableStyle);
      setPanelTag(thisTag);
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
          {...{ ...props, setPreview, setStyleView, panelTag, setPanelTag }}
        />
      </Portal>
      {{
        ...children,
        props: { ...props, className:classes[tag.styleId], classes: { ...allClasses,  } },
      }}
    </div>
  );
};

export default log(HocTag);
