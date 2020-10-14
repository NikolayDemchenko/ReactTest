import React, { useState, useEffect } from "react";
import { Portal } from "react-portal";
import AttributesPanel from "../../../Control/AttributesPanel/AttributesPanel";
import jss from "jss";
import preset from "jss-preset-default";
import log from "../../../../Log";

const HocTag = (props) => {
  // console.log("props", props.component.styles);
  const {
    page: { styles },
    assignableStyle,
    changeTag,
    updateStyle,
    children,
    tag,
    classes: allClasses,
  } = props;

  // console.log("tag", tag);

  const style = styles.find(({ id }) => id === tag.styleId);
  const [previewStyle, setPreview] = useState(style.style);
  const [panelStyle, setStyle] = useState(previewStyle);

  const setPanelStyle = (style) => {
    setStyle(style);
    updateStyle(tag.styleId, style);
  };
  const [styleView, setStyleView] = useState({ styleViewFilter: (p) => p });

  jss.setup(preset());

  const { classes } = jss
    .createStyleSheet({
      [tag.styleId]: styleView.styleViewFilter(previewStyle),
    })
    .attach();

  useEffect(() => {
    console.log("useEffect in");
    assignableStyle &&
      assignableStyle !== tag.styleId &&
      changeTag(tag, "styleId", assignableStyle);
    setPreview(style.style);
    setStyle(style.style);
    return () => {
      console.log("useEffect out");
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
