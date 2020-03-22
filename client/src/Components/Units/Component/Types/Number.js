import React from "react";
import NumberInput from "../Inputs/NumberInput";
import BaseType from "./BaseType";
export default function NumberType({ unit, setUnit, setControlPanel }) {
  // console.log("...NumberType...");
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };
  return (
    <BaseType unit={unit} setUnit={setUnit} setControlPanel={setControlPanel}>
       <NumberInput text={unit.value} setText={setValue} />
    </BaseType>
  );
}
