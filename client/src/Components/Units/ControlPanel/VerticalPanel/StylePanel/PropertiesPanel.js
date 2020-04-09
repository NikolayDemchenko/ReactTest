import React from "react";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import { cross } from "react-icons-kit/icomoon/cross";
import Properties from "./Properties";
export default function PropertiesPanel({
  name,
  style,
  setStyle,
  baseStyle,
  setPreview,
  setSelected,
  selected,
  deletePanel,
}) {
  // console.log("name", name);
  // console.log("selected", selected);
  const newStyle = () => {
    const newName = "property";
    setStyle({ [newName]: "value", ...style });
  };
  const setPreviewProperty = (style) => {
    setPreview({ ...baseStyle, ...style });
  };
  let color;
  switch (selected) {
    case name:
      color = "rgba(140, 200, 255, 0.8)";
      break;
    case "All style":
      color = "rgba(140, 200, 255, 0.7)";
      break;
    default:
      color = "rgba(140, 200, 255, 0.4)";
  }
  const borderColor =
    selected !== name ? "rgba(140, 200, 255, 0.1)" : "rgba(140, 200, 255, 0.4)";

  return (
    <div
      // tabIndex="0"
      onClick={(e) => {
        e.stopPropagation();
        setPreview({ ...baseStyle, ...style });
        setSelected(name);
      }}
      style={{
        borderTop: "4px solid ",
        color,
        borderColor,
      }}
    >
      <div
        style={{
          color:"#bdec",
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "0.5em",
          background: selected === name ? "rgba(134, 186, 250, 0.1)" : "none",
        }}
      >
        {name}
        <div
        title={"Добавить свойство"}
          style={{
            cursor: "pointer",
            width: "16px",
            margin: "0px 0px 5px 100px",
          }}
          onClick={newStyle}
        >
          <Icon size={"100%"} icon={plus} />
        </div>
        {name === "Base style" ? null : (
          <div title={"Удалить панель"}
            style={{
              cursor: "pointer",
              margin: "0 5px 0 auto",
              width: "12px",
            }}
            onClick={deletePanel}
          >
            <Icon size={"100%"} icon={cross} />
          </div>
        )}
      </div>
      <Properties
        style={style}
        selected={selected}
        setSelected={setSelected}
        setStyle={setStyle}
        setPreview={setPreviewProperty}
      />
    </div>
  );
}
