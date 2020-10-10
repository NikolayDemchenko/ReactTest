import React, { useState, useEffect } from "react";
import log from "../../../../Log";
import PropertiesPanel from "./PropertiesPanel";
import SettingsPanel from "./SettingsPanel";
// import PopupInput from "../Inputs/PopupInput/PopupInput";
function StylePanel(props) {
  // console.log("%cStylePanel-VerticalPanel-App", "color: green");
  // console.log("props :>> ", props);

  const {
    tag,  
    updateStyle: _updateStyle,
    setPreview,
    panelStyle,
  } = props;

  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDragged] = useState();

  const updateStyle = () => {
    // console.log("Close!!!!!!");
    _updateStyle(tag.styleId, panelStyle);
  };

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
      {/* <PopupInput value={styleName} setValue={name=>updateStyle(tag.styleId,"name",name)} /> */}
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
          updateStyle,
          selected,
          panelStyle,          
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


export default React.memo(log(StylePanel) );

