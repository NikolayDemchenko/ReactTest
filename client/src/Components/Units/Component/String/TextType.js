import React from "react";
import TextInput from "../Inputs/TextInput";
import BaseType from "../BaseType";
export default function Unit({ unit, setUnit, setControlPanel }) {
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };
  return (
    <BaseType unit={unit} setUnit={setUnit} setControlPanel={setControlPanel}>
       <TextInput text={unit.value} setText={setValue} />
    </BaseType>
  );
}