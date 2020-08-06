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
  const getTagAllStyles = (tag) => {
    return Object.entries(getComputedStyle(document.getElementById(tag.id)))
      .map(([key, value]) => {
        key = +key || key === "0" ? +key : key;
        return { key, value };
      })
      .filter((obj) => typeof obj.key !== "number");
  };
 

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
          name: "Style",
          selected,
          style,
          setStyle,
          setSelected,
          draggedProp,
          setDraggedProp,
          setPreview: setPreviewStyle,tagAllStyles:getTagAllStyles(tag)
        }}
      />
    </div>
  );
}
export default StylePanel;
