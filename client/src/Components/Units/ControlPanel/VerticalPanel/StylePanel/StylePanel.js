import React from "react";
import Icon from "react-icons-kit";
import { ic_library_add } from "react-icons-kit/md/ic_library_add";
import { ic_note_add } from "react-icons-kit/md/ic_note_add";
import PropertiesPanel from "./PropertiesPanel";
export default function StylePanel({
  controlPanel,
  setControlPanel,
  setPreview,
  selected,
  setSelected,
}) {
  const { style } = controlPanel.unit.tagProps;
  const baseStyle = style;
  const { unit, setUnit } = controlPanel;
  const setStyle = (style) => {
    setUnit({ ...unit, tagProps: { ...unit.tagProps, style } });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tagProps: { ...unit.tagProps, style } },
    });
  };
  const newPanel = () => {
    setStyle({ ...style, ["&:"]: {} });
  };
  const setPreviewAllStyle = (style) => {
    setPreview({ ...unit, tagProps: { ...unit.tagProps, style } });
  };
  const setPreviewStyle = (style) => {
    for (let key in style) {
      if (typeof style[key] === "object") {
        delete style[key];
      }
    }
    // console.log("style", style);
    setPreview({ ...unit, tagProps: { ...unit.tagProps, style } });
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
          color: "#bdef",
          paddingLeft: "0.5em",
          // height: "26px",
          cursor: "pointer",

          height: "26px",
          background:
            selected === "All style" ? "rgba(134, 186, 250, 0.15)" : "none",
        }}
        onClick={() => {
          setSelected("All style");
          setPreviewAllStyle(baseStyle);
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
        >
          <div
            title={"Добавить псевдокласс"}
            style={{
              cursor: "pointer",
              width: "22px",
              margin: "0 1px",
              // border: "1px solid #fff",
            }}
            onClick={newPanel}
          >
            <Icon size={"100%"} icon={ic_note_add} />
          </div>
          <div
            title={"Добавить @media"}
            style={{
              cursor: "pointer",
              width: "22px",
              margin: "0 1px",
              // border: "1px solid #fff",
            }}
            // onClick={newPanel}
          >
            <Icon size={"100%"} icon={ic_library_add} />
          </div>
        </div>
      </div>
      <PropertiesPanel
        name={"Base style"}
        baseStyle={baseStyle}
        style={style}
        setStyle={setStyle}
        selected={selected}
        setSelected={setSelected}
        setPreview={setPreviewStyle}
      />
    </div>
  );
}
