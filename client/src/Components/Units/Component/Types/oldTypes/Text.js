import React from "react";
import TextInput from "../../Inputs/TextInput";
import BaseType from "./BaseType";
export default function TextType(props) {
  const { unit, setUnit, setControlPanel }=props
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };
  return (
    <BaseType {...props}>
       <TextInput text={unit.value} setText={setValue} />
    </BaseType>
  );
}