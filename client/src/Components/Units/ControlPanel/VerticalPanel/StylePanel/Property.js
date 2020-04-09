import React from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import PropertyInputSwitch from "./PropertyInputSwitch";
import PopoverInput from "../Inputs/StringInput";
export default function Property({
  property,
  setProperty: { setName, setValue },
  deleteProperty,
  setPreview,
}) {
  // console.log('property', property)
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
        title={"CSS свойство"}
        style={{
          justifySpropertyf: "start",
          padding: "0px 0.5em",
          // border: "1px solid #fff",
        }}
      >
        <PopoverInput value={Object.keys(property)[0]} setValue={setName} />
      </div>
      <div
        title={"Значение свойства"}
        style={{
          justifySpropertyf: "end",
          overflow: "hidden",
          width: "80px",
        }}
      >
        <PropertyInputSwitch
          value={Object.values(property)[0]}
          setValue={setValue}
          setPreview={setPreview}
        />
      </div>
      <div
        title={"Удалить свойство"}
        style={{
          cursor: "pointer",
          margin: "0 5px 0 auto",
        }}
        onClick={deleteProperty}
      >
        <Icon size={"100%"} icon={cross} />
      </div>
    </div>
  );
}
