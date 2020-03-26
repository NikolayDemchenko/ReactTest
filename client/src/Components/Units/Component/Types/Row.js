import React from "react";
import RowInput from "../Inputs/RowInput";
import BaseType from "./BaseType";
export default function Row(props) {
  const { unit, setUnit, setControlPanel }=props
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };
  return (
    <BaseType {...props}>
       <RowInput  text={unit.value} setText={setValue} />
    </BaseType>
  );
}
