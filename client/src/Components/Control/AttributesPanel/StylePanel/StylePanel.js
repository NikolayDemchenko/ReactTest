import React, { useState, useEffect } from "react";
import PropertiesPanel from "./PropertiesPanel";
import SettingsPanel from "./SettingsPanel";
import PopupInput from "../Inputs/PopupInput/PopupInput";
function StylePanel(props) {
  // console.log("%cStylePanel-VerticalPanel-App", "color: green");
  // console.log("props :>> ", props);

  const { tag, setPanelStyle, setPreview, panelStyle,styleName,updateStyle } = props;


  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDragged] = useState();

  const getDefaultStyleProps = (id) => {
    const result = Object.entries(getComputedStyle(document.getElementById(id)))
      .map(([key, value]) => {
        key = +key || key === "0" ? +key : key;
        return { key, value };
      })
      .filter((obj) => typeof obj.key !== "number");
    return result;
  };

  const setDraggedProp = (item) => {
    console.log("draggedProp", item);
    setDragged(item);
  };

  const onAllStyle = () => {
    setSelected("All style");
    props.setStyleView({ styleViewFilter: (p) => p });
  };

  return (
    <div style={{ background: "rgba(30,40,57,.6)" }} title="CSS (JSS) Стили">
      <PopupInput value={styleName} setValue={name=>updateStyle(tag.styleId,"name",name)} />
      <SettingsPanel
        {...{
          ...props,
          onAllStyle,    
          selected,
          panelStyle,
          setPreview,
        }}
      />
      <PropertiesPanel
        {...{
          ...props,
          name: "Style",
          selected,         
          panelStyle,
          setPanelStyle,
          setSelected,
          draggedProp,
          setDraggedProp,
          setPreview,
          allStyleProps: getDefaultStyleProps(tag.id),
        }}
      />
    </div>
  );
}
export default StylePanel;
