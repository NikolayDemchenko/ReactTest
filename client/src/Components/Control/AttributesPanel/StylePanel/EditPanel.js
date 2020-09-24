import React, { useState, useEffect } from "react";
import { ic_update } from "react-icons-kit/md/ic_update";
import Icon from "react-icons-kit";
import log from "../../../../Log";
import { buttonStyle } from "./BtnStyle";import {ic_content_copy} from 'react-icons-kit/md/ic_content_copy'
import parse from "style-to-object";
import {createCssProperties} from "convert-to-css";
import {
  deleteObjectProps,
  deleteNoObjectProps,
} from "./Function/ObjectManager";
function EditPanel(props) {
  const { panelStyle, setPanelStyle} = props;
  // console.log("%cPropertiesPanel-StylePanel", "color: green");
  console.log("props :>> ", props);
  
  // JSON.stringify(panelStyle)

  const stringStyle =
    createCssProperties(deleteObjectProps(panelStyle)) + ";";
  const [value, setValue] = useState(stringStyle);
  useEffect(() => {
    setValue(stringStyle);
    return () => {};
  }, [panelStyle]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end"        
        }}
      >
        {/* <div
          title={"Копировать стиль в буфер"}
          className={buttonStyle}
          onClick={(e) => {
            e.stopPropagation();
     window.navigator.clipboard.writeText(JSON.stringify({name:"",style}))
          }}
        >
          <Icon size={"100%"} icon={ic_content_copy} />
        </div> */}
        <div
          title={"Обновить изменения"}
          className={buttonStyle}
          onClick={(e) => {
            e.stopPropagation();
            setPanelStyle({
              ...deleteNoObjectProps(panelStyle),
              ...parse(value),
            });
          }}
        >
          <Icon size={"120%"} icon={ic_update} />
        </div>
      </div>
      <textarea
        style={{
          minHeight: "10rem",
          fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
          width: "95%",
          padding: "2px 6px",
          border: "1px solid #678",
          background: "transparent",
          color: "inherit",
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    </div>
  );
}
export default EditPanel;
// export default log(EditPanel)