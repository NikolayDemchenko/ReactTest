import React from "react";
import Icon from "react-icons-kit";
import { copy } from "react-icons-kit/icomoon/copy";
import { floppyDisk } from "react-icons-kit/icomoon/floppyDisk";
import { exportIcon } from "react-icons-kit/entypo/exportIcon";
import { SaveToJSON } from "../../../../../AppFunction";
function StylePanel(props) {
    console.log("props :>> ", props);
  const {newStyle,updateStyle, onAllStyle, style, selected,tag } = props;
  const btnStyle = {
    cursor: "pointer",
    width: "16px",
    margin: "0px 2px ",
    // border: "1px solid #fff",
  };
  return (
    <div
      style={{
        display: "flex",
        borderTop: "4px solid ",
        borderColor:
          selected !== "All style"
            ? "rgba(140, 200, 255, 0)"
            : "rgba(140, 200, 255, 0.4)",
        cursor: "default",
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
      {"Settings"}
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
        }}
      >
        <div
          title={"Сохранить изменения"}
          style={btnStyle}
          onClick={(e) => {
            e.stopPropagation();
            updateStyle(style,tag.styleId)
            console.log("Сохранить изменения стиля!");
          }}
        >
          <Icon size={"100%"} icon={floppyDisk} />
        </div>
        <div
          title={"Копировать стиль"}
          style={btnStyle}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Копировать стиль!");
            newStyle(style,"Новый стиль",tag)
          }}
        >
          <Icon size={"100%"} icon={copy} />
        </div>
        <div
          title={"Экспортировать стиль"}
          style={btnStyle}
          // Сохранение файлов
          onClick={(e) => {
            e.stopPropagation();
            SaveToJSON(style);
          }}
        >
          <Icon size={"100%"} icon={exportIcon} />
        </div>
      </div>
    </div>
  );
}
export default StylePanel;
