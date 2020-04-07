import React from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import StyleInputSwitch from "./StyleInputSwitch";
import PopoverInput from "../Inputs/StringInput";
import RenameObjectProperty from "../../../Function/RenameObjectProperty";
export default function Styles({property,setProperty:{setName,setValue},deleteProperty}) {

  return (
    <div      
      style={{
        // border: "1px solid #fff",
        display: "grid",
        gridTemplateColumns: "60% 35% 1em",
        marginTop: "2px",
        borderBottom: "1px solid #55667766",
        background: "rgba(30,40,57,.4)",
      }}
    >
      <div
        style={{
          justifySpropertyf: "start",
          padding: "0px 0.5em",
          // border: "1px solid #fff",
        }}
      >
        <PopoverInput
          value={Object.keys(property)[0]}
          setValue={setName}
        />
      </div>
      <div
        style={{
          justifySpropertyf: "end",
          overflow: "hidden",
          width: "80px",
        }}
      >
        <StyleInputSwitch
          value={Object.values(property)[0]}
          setValue={setValue}
        />
      </div>
      <div
        style={{
          cursor: "pointer",
          margin: "0 5px 0 auto",
          color: "#9ab",
        }}
        onClick={ deleteProperty}
      >
        <Icon size={"100%"} icon={cross} />
      </div>
    </div>
  );
}
