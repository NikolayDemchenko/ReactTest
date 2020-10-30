import React from "react";
import Icon from "react-icons-kit";
import { buttonStyle } from "./BtnStyle";
import { copy } from "react-icons-kit/icomoon/copy";
import { exportIcon } from "react-icons-kit/entypo/exportIcon";
import { SaveToJSON } from "../../../../AppFunction";
import { paintBrush } from "react-icons-kit/fa/paintBrush";
import { ic_update } from "react-icons-kit/md/ic_update";
import { book } from "react-icons-kit/fa/book";
import { folderDownload } from "react-icons-kit/icomoon/folderDownload";
// import { boxAdd } from "react-icons-kit/icomoon/boxAdd";
import { boxRemove } from "react-icons-kit/icomoon/boxRemove";
import SelectPanel from "../../ModalWindows/SelectPanel/SelectPanel";
import Styles from "../JSON/Styles.json";
import PopupInput from "../Inputs/PopupInput/PopupInput";
function SettingsPanel(props) {
  // console.log("props :>> ", props);
  const {
    addStyle,
    updateStyleName,
    panelStyle,
    // setPreview,
    selected,
    tag,
    assignableStyle,
    setSettings,
    updateStyleData,
    styleName,
    changeTag,
    styles,
  } = props;

  // console.log("props", props);
  // console.log("Styles", Styles);

  const setLibrStyleByName = (name) => {
    const style = Styles.find((style) => style.name === name);
    updateStyleData(style.data);
  };
  const changeTagStyleByName = (name) => {
    const style = styles.find((style) => style.name === name);
    changeTag(tag, "styleId", style.id);
  };

  return (
    <div
      title={"свойства стиля"}
      style={{
        // display: "flex",
        borderTop: "4px solid ",
        borderColor:
          selected !== "All style"
            ? "rgba(140, 200, 255, 0)"
            : "rgba(140, 200, 255, 0.4)",
        cursor: "default",
        paddingLeft: "0.5em",
        // height: "26px",
        background:
          selected === "All style" ? "rgba(134, 186, 250, 0.15)" : "none",
      }}
      // onClick={(e) => {
      //   e.stopPropagation();
      //   onAllStyle();
      // }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            height: "26px",
            width: "100%",
            // border: "1px solid white",
          }}
          title={"имя стиля"}
        >
          <PopupInput value={styleName} setValue={updateStyleName} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div
            title={"Новый стиль"}
            // style={btnStyle}
            className={buttonStyle}
            onClick={(e) => {
              e.stopPropagation();
              console.log("Копировать стиль!");
              addStyle(panelStyle,"new_style",tag);
            }}
          >
            <Icon size={"100%"} icon={copy} />
          </div>
          <SelectPanel
            items={styles.map((style) => style.name)}
            selected={styles.find(({ id }) => id === tag.styleId).name}
            setItem={changeTagStyleByName}
            button={
              <div title={"Выбрать стиль тега"} className={buttonStyle}>
                <Icon size={"100%"} icon={folderDownload} />
              </div>
            }
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        <SelectPanel
          items={Styles.map((style) => style.name)}
          setItem={setLibrStyleByName}
          button={
            <div title={"Библиотека стилей"} className={buttonStyle}>
              <Icon size={"100%"} icon={book} />
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
                  assignableStyle: tag.styleId,
                };
              } else {
                return {
                  selectedId: state.selectedId,
                };
              }
            });
            console.log("Назначить стиль!");
          }}
        >
          <Icon size={"100%"} icon={paintBrush} />
        </div>

        <div
          title={"Копировать в буфер"}
          // style={btnStyle}
          className={buttonStyle}
          onClick={(e) => {
            e.stopPropagation();
            window.navigator.clipboard.writeText(
              JSON.stringify({ name: "", panelStyle })
            );
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
            SaveToJSON(panelStyle);
          }}
        >
          <Icon size={"100%"} icon={exportIcon} />
        </div>
      </div>
    </div>
  );
}
export default SettingsPanel;
