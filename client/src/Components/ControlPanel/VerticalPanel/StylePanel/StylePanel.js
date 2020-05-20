import React, { useState, useEffect } from "react";
import PropertiesPanel from "./PropertiesPanel";
function StylePanel(props) {
  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDragged] = useState();
  const setDraggedProp = (item) => {
    console.log("draggedProp", item);
    setDragged(item);
  };

  const { tag, setTag } = props;
  const { style } = tag;
  // console.log("style", style);
  useEffect(() => {
    return () => {
      setPreviewTagStyle(style);
    };
  }, [style]);

  const setTagStyle = (style) => {
    // console.log('tag', tag.style)
    // console.log('style', style)
    setTag({ ...tag, style });
  };

  const setPreviewTagStyle = (style) => {
    // console.log("setPreviewAllStyle");
    props.setPreview({ ...tag, style });
  };
  const setPreviewStyleElement = (element) => {
    for (let key in element) {
      if (typeof element[key] === "object") {
        delete element[key];
      }
    }
    setPreviewTagStyle(element);
  };

  const borderColor =
    selected !== "All style"
      ? "rgba(140, 200, 255, 0)"
      : "rgba(140, 200, 255, 0.4)";

  return (
    <div style={{ background: "rgba(30,40,57,.6)" }} title="CSS (JSS) Стили">
      <div
        style={{
          display: "flex",
          borderTop: "4px solid ",
          borderColor,
          // color: "#bdef",
          paddingLeft: "0.5em",
          height: "26px",
          background:
            selected === "All style" ? "rgba(134, 186, 250, 0.15)" : "none",
        }}
        onClick={(e) => {
          e.stopPropagation();
          setSelected("All style");
          setPreviewTagStyle(style);
        }}
      >
        {"All styles"}
      </div>
      <PropertiesPanel
        {...props}
        name={"Base style"}
        style={style}
        setStyle={setTagStyle}
        selected={selected}
        setSelected={setSelected}
        setPreview={setPreviewStyleElement}
        draggedProp={draggedProp}
        setDraggedProp={setDraggedProp}
      />
    </div>
  );
}
function areEqual(prevProps, nextProps) {
  // prevProps.tag === nextProps.tag ?  console.log('Равно') : console.log('Не равно');
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(StylePanel, areEqual);