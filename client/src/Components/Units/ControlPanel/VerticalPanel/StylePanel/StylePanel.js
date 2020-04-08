import React,{useState} from "react";
import PropertiesPanel from "./PropertiesPanel";
export default function StylePanel({
  controlPanel,
  setControlPanel,
  setPreview,
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
const [label, setLabel] = useState("All style")

  return (
    <div style={{ background: "rgba(30,40,57,.8)" }}>
      <div style={{ textAlign: "center" }} title="CSS (JSS) Стили">
        Стили : {label==="Base style"?"All style":label}
      </div>
      <PropertiesPanel
        name={"Base style"}
        style={style}
        setStyle={setStyle}
        baseStyle={style}
        setLabel={setLabel}
        setPreviewStyle={setPreviewStyle}
      />
    </div>
  );
}
