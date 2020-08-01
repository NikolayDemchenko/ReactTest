import React, { useState, useEffect } from "react";
import PropertiesPanel from "./PropertiesPanel";
import StyleSettings from "./SettingsPanel/StyleSettings";
function StylePanel(props) {
  // console.log("%cStylePanel-VerticalPanel-App", "color: green");
  // console.log("props :>> ", props);
  const { tag, setTag, setPreview, changeTag } = props;
  const { style } = tag;

  // const [clon, setClon] = useState(false);
  // console.log('clon :>> ', clon);
  // const [clonStyleId, setClonStyle] = useState(tag.styleId);
  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDragged] = useState();

  const setDraggedProp = (item) => {
    console.log("draggedProp", item);
    setDragged(item);
  };

  // useEffect(() => {
  //   return () => {
  //     console.log('clon :>> ', clon);
  //     if (clon) {
  //       changeTag(tag, "styleId", clonStyleId);
  //     }
  //     onAllStyle();
  //   };
  // }, [tag.id]);

  const onAllStyle = () => {
    setSelected("All style");
    props.setFunc({ styleFilter: (p) => p });
  };
  const setPreviewStyle = (style) => {
    // console.log("style :>> ", style);
    setPreview({ ...tag, style });
  };

  const setStyle = (style, chain) => {
    // console.log(`setStyle-StylePanel ${chain}`);
    setTag({ ...tag, style }, `\nsetStyle-StylePanel ${chain}`);
  };

  return (
    <div style={{ background: "rgba(30,40,57,.6)" }} title="CSS (JSS) Стили">
      <StyleSettings
        {...{
          ...props,
          onAllStyle,
          selected,
          style,
          // clon,
          // setClon,
          // setClonStyle,
        }}
      />
      <PropertiesPanel
        {...{
          ...props,
          name: "Base style",
          selected,
          style,
          setStyle,
          setSelected,
          draggedProp,
          setDraggedProp,
          setPreview: setPreviewStyle,
        }}
      />
    </div>
  );
}
export default StylePanel;
