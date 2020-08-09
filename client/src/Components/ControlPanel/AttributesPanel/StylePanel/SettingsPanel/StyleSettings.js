import React from "react";
import Icon from "react-icons-kit";
import { buttonStyle } from "../BtnStyle";
import { copy } from "react-icons-kit/icomoon/copy";
import { exportIcon } from "react-icons-kit/entypo/exportIcon";
import { SaveToJSON } from "../../../../../AppFunction";
import { paintBrush } from "react-icons-kit/fa/paintBrush";
import { ic_update } from "react-icons-kit/md/ic_update";
import { folderDownload } from "react-icons-kit/icomoon/folderDownload";
import { boxAdd } from "react-icons-kit/icomoon/boxAdd";
import {boxRemove} from 'react-icons-kit/icomoon/boxRemove'
import SelectPanel from "../../../SelectPanel/SelectPanel";
import Styles from "../../JSON/Styles.json";
function StylePanel(props) {
  // console.log("props :>> ", props);
  const {
    addStyle,
    updateStyle,
    onAllStyle,
    style,
    setPreview,
    selected,
    tag,
    assignableStyle,
    setSettings,
    setTag,
    page: { styles },
  } = props;
  // console.log("props", props);
  // console.log("Styles", Styles);
  const allStyles = [...styles, ...Styles];
  const getStyle = (item) => {
    const style = allStyles.find((style) => style.name === item).style;
    setTag((tag) => ({ ...tag, style }));
    setPreview(style);

    // console.log(
    //   "addStyle(allStyles.find(style=>style.name===item).style)",
    //   allStyles.find((style) => style.name === item).style
    // );
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
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <SelectPanel
          items={allStyles.map((style) => style.name)}
          selectedItem={""}
          setItem={getStyle}
          button={
            <div title={"Выбрать стиль"} className={buttonStyle}>
              <Icon size={"100%"} icon={folderDownload} />
            </div>
          }
        />
        <div
          title={"Назначить стиль"}
          className={buttonStyle}
          style={assignableStyle && { color: "#ffa" }}
          onClick={(e) => {
            e.stopPropagation();
            setSettings((state) => {
              if (!state.assignableStyle) {
                return {
                  ...state,
                  tagsForRender: null,
                  assignableStyle: tag.styleId,
                };
              } else {
                return {
                  selectedId: state.selectedId,
                  tagsForRender: null,
                };
              }
            });
            console.log("Назначить стиль!");
          }}
        >
          <Icon size={"100%"} icon={paintBrush} />
        </div>
        <div
          title={"Обновить изменения"}
          className={buttonStyle}
          onClick={(e) => {
            e.stopPropagation();
            updateStyle(style, tag.styleId);
          }}
        >
          <Icon size={"120%"} icon={ic_update} />
        </div>
        <div
          title={"Копировать стиль"}
          // style={btnStyle}
          className={buttonStyle}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Копировать стиль!");
            setTag(addStyle(style, "Самый новый стиль", tag));
          }}
        >
          <Icon size={"100%"} icon={copy} />
        </div>
        <div
          title={"Копировать в буфер"}
          // style={btnStyle}
          className={buttonStyle}
          onClick={(e) => {
            e.stopPropagation();          
            window.navigator.clipboard.writeText(JSON.stringify({name:"",style}))
          }}
        >
          <Icon size={"100%"} icon={boxRemove} />
        </div>
        <div
          title={"Экспортировать стиль"}
          // style={btnStyle}
          className={buttonStyle}
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
