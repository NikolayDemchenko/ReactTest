import React,{useState} from "react";
import { StyleContext } from "../../ControlsContext";
import PropertiesPanel from "./PropertiesPanel";
export default function StylePanel(props) {

 
  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDragged] = useState();
  const setDraggedProp=(item)=>{
    console.log('draggedProp', item)
    setDragged(item)
  }
  const { tag, setTag } = props;
  const { style } = tag;

  const setStyle = (style) => {  
    setTag({ ...tag, style });
  };

  const setPreviewAllStyle = (style) => {
    props.setPreview({ ...tag, style });
  };
  const setPreviewStyle = (style) => {
    for (let key in style) {
      if (typeof style[key] === "object") {
        delete style[key];
      }
    }

    setPreviewAllStyle(style);
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
          setPreviewAllStyle(style);
        }}
      >
        {"All styles"}

      </div>
      <PropertiesPanel
      {...props}
        name={"Base style"}
        style={style}
        setStyle={setStyle}
        selected={selected}
        setSelected={setSelected}
        setPreview={setPreviewStyle}
        draggedProp={draggedProp}
        setDraggedProp={setDraggedProp}
      />
    </div>
  );
}
