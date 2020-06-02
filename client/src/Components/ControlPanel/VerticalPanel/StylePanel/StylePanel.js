import React, { useState, useEffect } from "react";
import PropertiesPanel from "./PropertiesPanel";
import Icon from "react-icons-kit";
import { exportIcon } from "react-icons-kit/entypo/exportIcon";
import FileSaver from "file-saver";
function StylePanel(props) {
  // console.log("%cStylePanel-VerticalPanel-App", "color: green");
  // console.log("props :>> ", props);
  const [selected, setSelected] = useState("All style");
  const [draggedProp, setDragged] = useState();

  const setDraggedProp = (item) => {
    console.log("draggedProp", item);
    setDragged(item);
  };

  const { tag, setTag, setPreview } = props;
  // console.log('tag :>> ', tag);
  const { type, style } = tag;

  // console.log("style", style);
  // console.log("props", props);

  // useEffect(() => {
  //   // document.getElementById("All_styles").click();
  //   // setStyleSettings(style)
  //   console.log('style', style.backgroundColor)
  //   return () => {
  //     console.log('style', style.backgroundColor)
  //     // setSelected("All style");
  //     // setPreviewStyle(style);
  //   };
  // }, [tag.id, type]);

  // const setpreviewStyle = (style) => {
  //   // console.log("setpreviewStyle",style);
  //   // setPreview();
  //   setPreview({ ...preview, style });
  //   // document.getElementById(id).click();
  // };

  const setStyle = (style) => {
    setTag({ ...tag, style });
  };

  const setPreviewFragment = (style) => {
    for (let key in style) {
      if (typeof style[key] === "object") {
        delete style[key];
      }
    }
    // console.log("element", element);
    setPreview({ ...tag, style });
  };

  const borderColor =
    selected !== "All style"
      ? "rgba(140, 200, 255, 0)"
      : "rgba(140, 200, 255, 0.4)";

  return (
    <div style={{ background: "rgba(30,40,57,.6)" }} title="CSS (JSS) Стили">
      <div
        id={"All_styles"}
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
          // console.log('style', style)
          // setStyle(style);
        }}
      >
        {"Styles"}
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <div
            title={"Экспортировать стиль"}
            style={{
              cursor: "pointer",
              width: "16px",
              margin: "0px 2px ",
              // border: "1px solid #fff",
            }}
            // Сохранение файлов
            onClick={(e) => {
              e.stopPropagation();

              FileSaver.saveAs(
                new Blob([JSON.stringify(style)], {
                  type: "application/json;charset=utf-8",
                })
              );
            }}
          >
            <Icon size={"100%"} icon={exportIcon} />
          </div>
        </div>
      </div>
      <PropertiesPanel
        // {...props}
        name={"Base style"}
        style={style}
        setStyle={setStyle}
        selected={selected}
        setSelected={setSelected}
        setPreview={(style) => setPreview({ ...tag, style })}
        setPreviewFragment={setPreviewFragment}
        draggedProp={draggedProp}
        setDraggedProp={setDraggedProp}
      />
    </div>
  );
}

export default StylePanel;
