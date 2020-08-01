import React from "react";
import Icon from "react-icons-kit";
import jss from "jss";
import preset from "jss-preset-default";
import { copy } from "react-icons-kit/icomoon/copy";
import { floppyDisk } from "react-icons-kit/icomoon/floppyDisk";
import { exportIcon } from "react-icons-kit/entypo/exportIcon";
import { SaveToJSON } from "../../../../../AppFunction";
import { paintBrush } from "react-icons-kit/fa/paintBrush";
import { ic_update } from "react-icons-kit/md/ic_update";
function StylePanel(props) {
  // console.log("props :>> ", props);
  const {
    addStyle,
    updateStyle,
    onAllStyle,
    style,
    selected,
    tag,
    assignableStyle,
    setSettings,
    setTag,
  } = props;
  // console.log("props :>> ", props);
  const btnStyle = {
    cursor: "pointer",
    width: "16px",
    margin: "0px 5px ",
    // border: "1px solid #fff",
  };
  const btnHoverStyle = {
    // outline:"#cef solid 1px"
    transform: "perspective(200px) scaleZ(-20) translateZ(-2px)",
  };
  const btnActivStyle = {
    color: "#ffa",
    textShadow: "red 0 0 2px",
  };
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: {
        ...btnStyle,
        "&:hover": { ...btnHoverStyle },
        "&:active": { ...btnActivStyle },
      },
    })
    .attach();

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
          title={"Назначить стиль"}
          className={classes.style}
          style={assignableStyle ? btnActivStyle : btnStyle}
          onClick={(e) => {
            e.stopPropagation();
            setSettings((state) => {
              if (!state.assignableStyle) {
                return {
                  ...state,
                  tagsForRender: null,
                  assignableStyle: tag.styleId,
                };
              }else{
                return {
                  selectedId:state.selectedId,
                  tagsForRender: null          
                };
              }
            });
            console.log("Назначить стиль!");
          }}
        >
          <Icon size={"100%"} icon={paintBrush} />
        </div>
        <div
          title={"Сохранить изменения"}
          // style={btnStyle}
          className={classes.style}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Сохранить изменения стиля!");
            updateStyle(style, tag.styleId);
            // setClonStyle(tag.styleId);
          }}
        >
          <Icon size={"120%"} icon={ic_update} />
        </div>
        <div
          title={"Копировать стиль"}
          // style={btnStyle}
          className={classes.style}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Копировать стиль!");
            setTag(addStyle(style, "Новый стиль", tag));
          }}
        >
          <Icon size={"100%"} icon={copy} />
        </div>
        <div
          title={"Экспортировать стиль"}
          // style={btnStyle}
          className={classes.style}
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
