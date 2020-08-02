import React, { useState, useEffect } from "react";
import PropertiesPanel from "./PropertiesPanel";
import StyleSettings from "./SettingsPanel/StyleSettings";
function StylePanel(props) {
  // console.log("%cStylePanel-VerticalPanel-App", "color: green");
  // console.log("props :>> ", props);

  const { tag, setTag, setPreview, changeTag } = props;
  const { style } = tag;

  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDragged] = useState();

  const setDraggedProp = (item) => {
    console.log("draggedProp", item);
    setDragged(item);
  };

  const onAllStyle = () => {
    setSelected("All style");
    props.setFunc({ styleFilter: (p) => p });
  };
  const setPreviewStyle = (style) => {
    setPreview({ ...tag, style });
  };

  const setStyle = (style, chain) => {
    setTag({ ...tag, style }, `\nsetStyle-StylePanel ${chain}`);
  };

  return (
    <div style={{ background: "rgba(30,40,57,.6)" }} title="CSS (JSS) Стили">
      <StyleSettings
        {...{
          ...props,
          onAllStyle,
          selected,
          style 
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
