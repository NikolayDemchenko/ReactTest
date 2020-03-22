import React from "react";
import RowInput from "../Inputs/RowInput";
import BaseType from "./BaseType";
export default function Row({ unit, setUnit, setControlPanel }) {
  // console.log("...RowType...");
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };
  return (
    <BaseType unit={unit} setUnit={setUnit} setControlPanel={setControlPanel}>
       <RowInput  text={unit.value} setText={setValue} />
    </BaseType>
  );
}
