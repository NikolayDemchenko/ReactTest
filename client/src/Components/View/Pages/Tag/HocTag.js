import React, { useState, useEffect } from "react";
import { Portal } from "react-portal";
import AttributesPanel from "../../../Control/AttributesPanel/AttributesPanel";
import jss from "jss";
import preset from "jss-preset-default";
import log from "../../../../Log";
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
  // console.log("props", props.component.styles);
  const {
    page: { styles },
    assignableStyle,
    changeTag,
    children,
    tag,
    classes: allClasses,
  } = props;

  // console.log("tag", tag);

  const style = styles.find(({ id }) => id === tag.styleId);
  const [previewStyle, setPreview] = useState(style.style);
  const [panelStyle, setPanelStyle] = useState(previewStyle);

  const [styleView, setStyleView] = useState({ styleViewFilter: (p) => p });

  jss.setup(preset());

  const { classes } = jss
    .createStyleSheet({
      [tag.styleId]: styleView.styleViewFilter(previewStyle),
    })
    .attach();

  useEffect(() => {
    assignableStyle &&
      assignableStyle !== tag.styleId &&
      changeTag(tag, "styleId", assignableStyle);
    setPreview(style.style);
    setPanelStyle(style.style);
    return () => {
      // console.log("props", props);
    };
  }, [tag]);


  return (
    <div
      style={{ outline: "1px dashed #5af" }}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Portal>
        <AttributesPanel
          {...{
            ...props,
            styleName: style.name,
            previewStyle,
            setPreview,
            setStyleView,
            panelStyle,
            setPanelStyle,
          }}
        />
      </Portal>
      {{
        ...children,
        props: {
          ...props,
          className: classes[tag.styleId],
          classes: { ...allClasses },
        },
      }}
    </div>
  );
};

export default log(HocTag);
