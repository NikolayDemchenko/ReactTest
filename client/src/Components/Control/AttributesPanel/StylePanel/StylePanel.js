import React, { useState, useEffect } from "react";
import log from "../../../../Log";
import PropertiesPanel from "./PropertiesPanel";
import SettingsPanel from "./SettingsPanel";
// import PopupInput from "../Inputs/PopupInput/PopupInput";
function StylePanel(props) {
  // console.log("%cStylePanel-VerticalPanel-App", "color: green");
  // console.log("props :>> ", props);

  const {     
    setPreview,
    selected,
    assignableStyle,
    setSettings,
    styleName,
    changeTag,
    tag,
    updateStyle: _updateStyle,
    setStyleView,
    setPanelStyle    
  } = props;

  const [draggedProp, setDragged] = useState();

  const updateStyle = (propName, propValue) => {
    console.log("updateStyle");
    _updateStyle(tag.styleId, propName, propValue);
  };

  const getDefaultStyleProps = (id) => {
    // console.log('getDefaultStyleProps :>> ', id);
    const result = Object.entries(getComputedStyle(document.getElementById(id)))
      .map(([key, value]) => {
        key = +key || key === "0" ? +key : key;
        return { key, value };
      })
      .filter((obj) => typeof obj.key !== "number");
    return result;
  };

  const setDraggedProp = (item) => {
    console.log("setDraggedProp", item);
    setDragged(item);
  };

  const setFullPreview = () => {
    console.log("setFullPreview");
    props.setStyleView({ styleViewFilter: (p) => p });
  };

  return (
    <div style={{ background: "rgba(30,40,57,.6)" }} title="CSS (JSS) Стили">

      <SettingsPanel
        {...{
          ...props,         
          updateStyle,      
          setPreview,
          selected,
          assignableStyle,
          setSettings,
          setPanelStyle,
          styleName,
          changeTag,
          tag,
          
    
        }}
      />
      <PropertiesPanel
        {...{...props, 
          setFullPreview,
          setPanelStyle,
          setStyleView,
          name: "Style",             
          draggedProp,
          setDraggedProp,
          setPreview,
          allStyleProps: () => getDefaultStyleProps(tag.id),
        }}
      />
    </div>
  );
}

const change = (prev, next) => {
  // console.log("prevprops :>> ", prev);
  // console.log("nextprops :>> ", next);
};
export default React.memo(log(StylePanel));
