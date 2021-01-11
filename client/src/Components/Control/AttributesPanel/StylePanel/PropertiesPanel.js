import React, { useState, useEffect } from "react";
import Icon from "react-icons-kit";
import { buttonStyle } from "./BtnStyle";
import { ic_add_to_queue } from "react-icons-kit/md/ic_add_to_queue";
import { cross } from "react-icons-kit/icomoon/cross";
import EditPanel from "./EditPanel";
import {log,funcLog} from "../../../../Log";
import { ic_credit_card } from "react-icons-kit/md/ic_credit_card";
import { ic_note_add } from "react-icons-kit/md/ic_note_add";
import { ic_library_add } from "react-icons-kit/md/ic_library_add";
import PopupInput from "../Inputs/PopupInput/PopupInput";
import SelectPanel from "../../ModalWindows/SelectPanel/SelectPanel";
import Properties from "./Properties";
// import jss from "jss";
// import { deleteObjectProps } from "./Function/ObjectManager";
function PropertiesPanel(props) {
  const {
    name,
    setName,
    panelStyle,
    updateStyleData,
    removePanel,
    node,
    allStyleProps,
    previewBase,
  } = props;

  // console.log("%cPropertiesPanel-StylePanel", "color: green");

  const [edit, setEdit] = useState();

  const addPseudoClass = (e) => {
    e.stopPropagation();
    updateStyleData({ ...panelStyle, "&:": {} });
  };
  const addMedia = (e) => {
    e.stopPropagation();
    let _style = { ...panelStyle };
    for (let key in _style) {
      if (typeof _style[key] === "object" && key.indexOf("@media")) {
        delete _style[key];
      }
    }
    updateStyleData({ ..._style, "@media": {}, ...panelStyle });
  };

  const addProperty = (_key) => {
    const { key, value } = allStyleProps().find((style) => style.key === _key);

    console.log("add property", key, value);
    updateStyleData({ [key]: value, ...panelStyle });
  };
  // console.log("panelStyle", panelStyle);
  return (
    <div
      style={{
        borderTop: "4px solid rgba(140, 200, 255, 0.2)",
        color: "rgba(140, 200, 255, 0.7)",
      }}
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
            items={allStyleProps().map(({ key }) => key)}
            selected={""}
            setItem={addProperty}
            exItems={Object.keys(panelStyle)}
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
                removePanel();
              }}
            >
              <Icon size={"70%"} icon={cross} />
            </div>
          )}
        </div>
      </div>

      {edit && (
        <EditPanel {...{ panelStyle, updateStyleData, styleId: node.styleId }} />
      )}
      <Properties
        {...props}
        parentName={name}
        previewBase={{ ...previewBase, ...panelStyle }}
      />
    </div>
  );
}

// function areEqual(prevProps, nextProps) {
//   console.log('prevProps === nextProps:>> ', prevProps.panelStyle === nextProps.panelStyle);
//   console.log('prevProps.panelStyle :>> ', prevProps.panelStyle);
//   console.log('nextProps.panelStyle :>> ', nextProps.panelStyle);

//   return prevProps.panelStyle === nextProps.panelStyle
// }
// export default React.memo(log(PropertiesPanel), areEqual);
export default React.memo(log(PropertiesPanel));
