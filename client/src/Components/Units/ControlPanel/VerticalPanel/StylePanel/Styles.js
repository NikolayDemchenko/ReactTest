import React from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import InputSwitch from "../Inputs/InputSwitch";
import PopoverInput from "../Inputs/PopoverInput";
import RenameObjectProperty from "../../../Function/RenameObjectProperty";
export default function Styles({ style, setStyle }) {
  const deleteProperty = (prop, style) => {
    delete style[prop];
    setStyle(style);
  };

  if (style) {
    const settings = [];
    for (let key in style) {
      settings.push({ [key]: style[key] });
    }
    return settings.map((el) => {
      // console.log("!!!!!!!!el", el);
      return (
        <div
          key={settings.indexOf(el)}
          style={{
            // border: "1px solid #fff",
            display: "grid",
            gridTemplateColumns: "47% 47% 6%",
            marginTop: "2px",
            borderBottom: "1px solid #556677bb",
            background: "rgba(30,40,57,.4)",
          }}
        >
          <div
            style={{
              justifySelf: "start",
              padding: "0px 10px",
              // border: "1px solid #fff",
            }}
          >
            <PopoverInput
              value={Object.keys(el)[0]}
              setValue={(value) => {
                setStyle(
                  RenameObjectProperty(style, Object.keys(el)[0], value)
                );
              }}
            />
          </div>
          <div
            style={{ 
              justifySelf: "end",
              overflow: "hidden",
              width: "80px",
            }}
          >
            <InputSwitch
              value={Object.values(el)[0]}
              setValue={(value) => {
                setStyle({ ...style, ...{ [Object.keys(el)[0]]: value } });
              }}
            />
          </div>
          <div
            style={{
              cursor: "pointer",
              margin: "0 5px 0 auto",
              color: "#9ab",
            }}
            onClick={() => deleteProperty(Object.keys(el)[0], style)}
          >
            <Icon size={"80%"} icon={cross} />
          </div>
        </div>
      );
    });
  }
}
