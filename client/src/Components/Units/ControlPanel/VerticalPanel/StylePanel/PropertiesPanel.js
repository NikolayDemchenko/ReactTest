import React from "react";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import { cross } from "react-icons-kit/icomoon/cross";
import { ic_note_add } from "react-icons-kit/md/ic_note_add";
import { ic_library_add } from "react-icons-kit/md/ic_library_add";
import StringInput from "../Inputs/StringInput";
import Properties from "./Properties";
export default function PropertiesPanel({
  name,
  parentName,
  setName,
  style,
  setStyle,
  baseStyle,
  setPreview,
  selected,
  setSelected,
  deletePanel,
}) {
  // console.log("name", name);
  // console.log("selected", selected);
  const addProperty = () => {
    setStyle({ ["property"]: "value", ...style });
  };
  const addPseudoClass = () => {
    setStyle({ ...style, ["&:"]: {} });
  };
  const addMedia = () => {
    let _style = { ...style };
    for (let key in _style) {
      if (typeof _style[key] === "object" && key.indexOf("@media")) {
        delete _style[key];
      }
    }
    setStyle({ ..._style, ["@media"]: {}, ...style });
  };
  const setPreviewProperty = (style) => {
    setPreview({ ...baseStyle, ...style });
  };
  const fullName = name + parentName;
  let color;
  switch (selected) {
    case fullName:
      color = "rgba(140, 200, 255, 0.8)";
      break;
    case "All style":
      color = "rgba(140, 200, 255, 0.7)";
      break;
    default:
      color = "rgba(140, 200, 255, 0.4)";
  }
  let borderTop =
    selected !== fullName
      ? "4px solid rgba(140, 200, 255, 0.1)"
      : "4px solid rgba(140, 200, 255, 0.4)";

  borderTop = !fullName.indexOf("@media") ? "none" : borderTop;

  return (
    <div
      // tabIndex="0"
      onClick={(e) => {
        e.stopPropagation();
        setPreview({ ...baseStyle, ...style });
        setSelected(fullName);
      }}
      style={{ borderTop, color }}
      draggable="true"
    >
      <div style={{
          color: "#bdec",
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "0.5em",
          background:
            selected === fullName ? "rgba(134, 186, 250, 0.1)" : "none",
        }}>
        {name === "Base style" ? (
          name
        ) : (
          <StringInput value={name} setValue={setName} />
        )}
        <div style={{ display: "flex", marginLeft: "auto" }}>
          <div
            title={"Добавить свойство"}
            style={{
              cursor: "pointer",
              width: "16px",
              margin: "0px 2px ",
              // border: "1px solid #fff",
            }}
            onClick={addProperty}
          >
            <Icon size={"100%"} icon={plus} />
          </div>
          {name === "Base style" ? (
            <div
              title={"Добавить псевдокласс"}
              style={{
                cursor: "pointer",
                width: "22px",
                margin: "0 1px",   
              }}
              onClick={addPseudoClass}
            >
              <Icon size={"100%"} icon={ic_note_add} /></div>) : null}
          {!name.indexOf("@media") ? null : (
            <div
              title={"Добавить @media"}
              style={{
                cursor: "pointer",
                width: "22px",
                margin: "0 1px",            
              }}
              onClick={addMedia}
            >
              <Icon size={"100%"} icon={ic_library_add} />
            </div>
          )}
          {name === "Base style" ? null : (
            <div
              title={"Удалить панель"}
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                width: "14px",
              }}
              onClick={deletePanel}
            >
              <Icon size={"100%"} icon={cross} />
            </div>
          )}
        </div>
      </div>
      <Properties
        parentName={name}
        style={style}
        selected={selected}
        setSelected={setSelected}
        setStyle={setStyle}
        setPreview={setPreviewProperty}
      />
    </div>
  );
}
