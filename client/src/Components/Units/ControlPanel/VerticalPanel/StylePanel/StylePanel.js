import React,{useState} from "react";
import PropertiesPanel from "./PropertiesPanel";
export default function StylePanel({
  controlPanel,
  setControlPanel,
  setPreview,selected, setSelected
}) {
  const { style } = controlPanel.unit.tagProps;

  const { unit, setUnit } = controlPanel;
  const setStyle = (style) => {
    setUnit({ ...unit, tagProps: { ...unit.tagProps, style } });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tagProps: { ...unit.tagProps, style } },
    });
  };
  const setPreviewStyle = (style) => {
    setPreview({ ...unit, tagProps: { ...unit.tagProps, style } });
  };


  return (
    <div style={{ background: "rgba(30,40,57,.8)" }}>
      <div style={{ textAlign: "center" }} title="CSS (JSS) Стили">
        Стили : {selected==="Base style"?"All style":selected}
      </div>
      <PropertiesPanel
        name={"Base style"}
        baseStyle={style}
        style={style}
        setStyle={setStyle}
        selected={selected}
        setSelected={setSelected}
        setPreviewStyle={setPreviewStyle}
      />
    </div>
  );
}
