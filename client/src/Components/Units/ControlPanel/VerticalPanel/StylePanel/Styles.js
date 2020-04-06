import React from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import StyleInputSwitch from "./StyleInputSwitch";
import PopoverInput from "../Inputs/StringInput";
import RenameObjectProperty from "../../../Function/RenameObjectProperty";
export default function Styles(props) {
  const { style, setStyle } = props;
  const deleteProperty = (prop, style) => {
    delete style[prop];
    setStyle(style);
  };

  if (style) {
    const styles = [];
    for (let key in style) {
      styles.push({ [key]: style[key] });
    }
    return styles.map((el) => {
      // console.log("!!!!!!!!el", el);
      return (
        <div
          key={styles.indexOf(el)}
          style={{
            // border: "1px solid #fff",
            display: "grid",
            gridTemplateColumns: "47% 47% 6%",
            marginTop: "2px",
            borderBottom: "1px solid #55667766",
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
            <StyleInputSwitch
              {...props}
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
