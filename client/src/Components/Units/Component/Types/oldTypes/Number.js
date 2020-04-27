import React from "react";
import NumberInput from "../../Inputs/NumberInput";
import BaseType from "./BaseType";
export default function NumberType(props) {
  const { unit, setUnit, setControlPanel }=props
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };
  return (
    <BaseType {...props}>
       <NumberInput text={unit.value} setText={setValue} />
    </BaseType>
  );
}
