import React, { useState, useEffect } from "react";
import { ic_update } from "react-icons-kit/md/ic_update";
import Icon from "react-icons-kit";
import {log,funcLog} from "../../../../Log";
import { buttonStyle } from "../../Styles/BtnStyle";
import { ic_content_copy } from "react-icons-kit/md/ic_content_copy";
import parse from "style-to-object";
import { createCssProperties } from "convert-to-css";
import {
  deleteObjectProps,
  deleteNoObjectProps,
} from "./Function/ObjectManager";
function EditPanel(props) {
  const { panelStyle, updateStyleData } = props;
  // console.log("%cPropertiesPanel-StylePanel", "color: green");
  console.log("props :>> ", props);

  const stringStyle =
    createCssProperties(deleteObjectProps(panelStyle)) + ";";

  const [value, setValue] = useState(stringStyle);

  useEffect(() => {
    console.log("useEffect in");
    setValue(stringStyle);
    return () => {
      console.log("useEffect out");
    };
  }, [panelStyle]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
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
            updateStyleData({
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
