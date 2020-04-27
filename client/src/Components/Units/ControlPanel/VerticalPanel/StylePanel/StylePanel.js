import React from "react";
import { StyleContext } from "../../ControlsContext";
import PropertiesPanel from "./PropertiesPanel";
export default function StylePanel() {
  const {
    controlPanel,
    setControlPanel,
    setPreview,
    selected,
    setSelected,
  } = React.useContext(StyleContext);
console.log('setPreview', setPreview)
  const { style } = controlPanel.tag.tagProps;

  const { tag, setTag } = controlPanel;
  const setStyle = (style) => {
    setTag({ ...tag, tagProps: { ...tag.tagProps, style } });
    setControlPanel({
      ...controlPanel,
      tag: { ...tag, tagProps: { ...tag.tagProps, style } },
    });
    // console.log('style', style)
  };

  const setPreviewAllStyle = (style) => {
    setPreview({ ...tag, tagProps: { ...tag.tagProps, style } });
  };
  const setPreviewStyle = (style) => {
    for (let key in style) {
      if (typeof style[key] === "object") {
        delete style[key];
      }
    }
    // console.log("style", style);
    setPreviewAllStyle(style);
  };

  const borderColor =
    selected !== "All style"
      ? "rgba(140, 200, 255, 0)"
      : "rgba(140, 200, 255, 0.4)";

  return (
    <div
    
      style={{ background: "rgba(30,40,57,.6)" }}
      title="CSS (JSS) Стили"
    >
      <div
        style={{
          display: "flex",
          borderTop: "4px solid ",
          borderColor,
          color: "#bdef",
          paddingLeft: "0.5em",
          height: "26px",
          background:
            selected === "All style" ? "rgba(134, 186, 250, 0.15)" : "none",
        }}
        onClick={() => {
          setSelected("All style");
          setPreviewAllStyle(style);
        }}
      >
        {"All styles"}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "0px 0px 5px 100px",
            // border: "1px solid #fff",
          }}
        ></div>
      </div>
      <PropertiesPanel
        name={"Base style"}       
        style={style}
        setStyle={setStyle}
        selected={selected}
        setSelected={setSelected}
        setPreview={setPreviewStyle}
      />
    </div>
  );
}
