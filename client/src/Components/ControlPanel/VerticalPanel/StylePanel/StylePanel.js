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

  const { tag, setTag, preview, setPreview } = props;
  // console.log('tag :>> ', tag);
  const { type, style } = tag;

  // console.log("style", style);
  // console.log("props", props);

  useEffect(() => {
    return () => {
      onAllStyle();   
    };
  }, [tag.id]);

  // const clearStyleFragment = (element) => {
  //   // console.log("element :>> ", element);
  //   for (let key in element) {
  //     if (typeof element[key] === "object") {
  //       delete element[key];
  //     }
  //   }
  //   // console.log("element :>> ", element);
  //   return { ...element };
  // };

  // const setStyleFragment = (style) => {
  //   style
  //     ? setPreview({
  //         ...preview,
  //         style: {
  //           ...clearStyleFragment({ ...tag.style }),
  //           ...clearStyleFragment(style),
  //         },
  //       })
  //     : setPreview({ ...preview, style: { ...tag.style } });
  // };

  const onAllStyle = () => {
    setSelected("All style");
    props.setFunc({ styleFilter: (p) => p });
  };
  const setPreviewStyle = (style) => {
    setPreview({ ...tag, style });
  };

  const setStyle = (style, chain) => {
    // console.log(`setStyle-StylePanel ${chain}`);
    setTag({ ...tag, style }, `\nsetStyle-StylePanel ${chain}`);
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
          onAllStyle();
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

export default StylePanel;
