import React, { useState } from "react";
import Icon from "react-icons-kit";
import { buttonStyle } from "./BtnStyle";
import { ic_add_to_queue } from "react-icons-kit/md/ic_add_to_queue";
import { cross } from "react-icons-kit/icomoon/cross";
import EditPanel from "./EditPanel";
import log from "../../../../Log";
import { ic_credit_card } from "react-icons-kit/md/ic_credit_card";
import { ic_note_add } from "react-icons-kit/md/ic_note_add";
import { ic_library_add } from "react-icons-kit/md/ic_library_add";
import PopupInput from "../Inputs/PopupInput/PopupInput";
import SelectPanel from "../../ModalWindows/SelectPanel/SelectPanel";
import Properties from "./Properties";
import { deleteObjectProps } from "./Function/ObjectManager";
function PropertiesPanel(props) {
  const {
    name,
    parentName,
    setName,
    style,
    setStyle,
    setStyleView,
    deletePanel,
    selected,
    setSelected,
    tag, 
    allStyleProps,
  } = props;

  // console.log("%cPropertiesPanel-StylePanel", "color: green");
  // console.log("props :>> ", props);
  // console.log("style", style);

  const [edit, setEdit] = useState();

  const addPseudoClass = (e) => {
    e.stopPropagation();
    setStyle({ ...style, "&:": {} });
  };
  const addMedia = (e) => {
    e.stopPropagation();
    let _style = { ...style };
    for (let key in _style) {
      if (typeof _style[key] === "object" && key.indexOf("@media")) {
        delete _style[key];
      }
    }
    setStyle({ ..._style, "@media": {}, ...style });
  };

  const fullName = name + parentName;

  const setColor = (value, name) => {
    switch (value) {
      case name:
        return "rgba(140, 200, 255, 0.8)";
      case "All style":
        return "rgba(140, 200, 255, 0.7)";
      default:
        return "rgba(140, 200, 255, 0.4)";
    }
  };

  let borderTop =
    selected !== fullName
      ? "4px solid rgba(140, 200, 255, 0.1)"
      : "4px solid rgba(140, 200, 255, 0.4)";

  borderTop = !fullName.indexOf("@media") ? "none" : borderTop;

  const styleViewFilter = (preview) => {
    return {
      ...preview,
      style: {
        ...deleteObjectProps({ ...preview.style }),
        ...deleteObjectProps({ ...preview.style[name] }),
      },
    };
  };

  const addProperty = (_key) => {
    const { key, value } = allStyleProps.find((style) => style.key === _key);

    console.log("!!!!!!!!!!!!!!!e", key, value);
    setStyle({ [key]: value, ...style });
  };

  return (
    <div
      // Включение частичного превью
      onClick={(e) => {
        e.stopPropagation();
        setStyleView({ styleViewFilter });
        setSelected(fullName);
      }}
      style={{ borderTop, color: setColor(selected, fullName) }}
      onDragOver={(e) => {
        // console.log('div', div)
        e.preventDefault();
      }}
    >
      <div
        style={{
          color: "#bdec",
          display: "flex",
          paddingLeft: "0.5em",
          background:
            selected === fullName ? "rgba(134, 186, 250, 0.1)" : "none",
        }}
      >
        {name === "Style" ? (
          name
        ) : (
          <PopupInput value={name} setValue={setName} />
        )}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <div
            title={"Редактировать"}
            className={buttonStyle}
            onClick={() => setEdit((edit) => !edit)}
          >
            <Icon size={"100%"} icon={ic_credit_card} />
          </div>
          <SelectPanel
            items={allStyleProps.map(({ key }) => key)}
            selected={""}
            setItem={addProperty}
            exItems={Object.keys(style)}
            button={
              <div title={"Добавить свойство"} className={buttonStyle}>
                <Icon size={"100%"} icon={ic_add_to_queue} />
              </div>
            }
          />

          {name === "Style" && (
            <div
              title={"Добавить псевдокласс"}
              className={buttonStyle}
              onClick={addPseudoClass}
            >
              <Icon size={"100%"} icon={ic_note_add} />
            </div>
          )}
          {!name.indexOf("@media") ? null : (
            <div
              title={"Добавить @media"}
              className={buttonStyle}
              onClick={addMedia}
            >
              <Icon size={"100%"} icon={ic_library_add} />
            </div>
          )}
          {name !== "Style" && (
            <div
              title={"Удалить панель"}
              className={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                deletePanel();
              }}
            >
              <Icon size={"70%"} icon={cross} />
            </div>
          )}
        </div>
      </div>

      {edit && <EditPanel {...{ style, setStyle, styleId: tag.styleId }} />}
      <Properties {...props} parentName={name} />
    </div>
  );
}
export default PropertiesPanel;
// export default log(PropertiesPanel)
