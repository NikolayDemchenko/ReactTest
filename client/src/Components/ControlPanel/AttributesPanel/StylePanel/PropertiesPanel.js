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
import Properties from "./Properties";
import { deleteObjectProps } from "./Function/ObjectManager";
function PropertiesPanel(props) {
  const {
    name,
    parentName,
    setName,
    style,
    setStyle,
    setFunc,
    deletePanel,
    selected,
    setSelected,
  } = props;

  // console.log("%cPropertiesPanel-StylePanel", "color: green");
  // console.log("props :>> ", props);

  const [edit, setEdit] = useState();

  const addProperty = (e) => {
    e.stopPropagation();
    setStyle({ property: "value", ...style });
  };
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

  const styleFilter = (preview) => {
    return {
      ...preview,
      style: {
        ...deleteObjectProps({ ...preview.style }),
        ...deleteObjectProps({ ...preview.style[name] }),
      },
    };
  };

  return (
    <div
      // Включение частичного превью
      onClick={(e) => {
        e.stopPropagation();
        setFunc({ styleFilter });
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
          flexWrap: "wrap",
          paddingLeft: "0.5em",
          background:
            selected === fullName ? "rgba(134, 186, 250, 0.1)" : "none",
        }}
      >
        {name === "Base style" ? (
          name
        ) : (
          <PopupInput value={name} setValue={setName} />
        )}
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
          }}
        >
          <div
            title={"Редактировать"}
            className={buttonStyle}        
            onClick={() => setEdit((edit) => !edit)}
          >
            <Icon size={"100%"} icon={ic_credit_card} />
          </div>
          <div
            title={"Добавить свойство"}
            className={buttonStyle}      
            onClick={addProperty}
          >
            <Icon size={"100%"} icon={ic_add_to_queue} />
          </div>
          {name === "Base style" && (
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
          {name !== "Base style" && (
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

      {edit && <EditPanel {...{ style,setStyle }} />}
      <Properties {...props} parentName={name} />
    </div>
  );
}
export default PropertiesPanel;
// export default log(PropertiesPanel)
