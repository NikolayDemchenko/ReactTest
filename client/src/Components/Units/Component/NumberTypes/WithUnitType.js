import React from "react";
import NumberInput from "../Inputs/NumberInput";
import RowInput from "../Inputs/RowInput";
import BaseType from "../BaseType";
export default function WithUnitType({ unit, setUnit, setControlPanel }) {
  const setValue = value => {
    setUnit({ ...unit, value });
    setControlPanel({ unit: { ...unit, value }, setUnit });
    console.log("setValue", value);
  };
  const setUnitValue = un => {
    setUnit({ ...unit, value:{...unit.value,unit:un} });
    setControlPanel({ unit: { ...unit, value:{...unit.value,unit:un} }, setUnit });
    console.log("setUnitValue", un);
  };
  return (
    <BaseType unit={unit} setUnit={setUnit} setControlPanel={setControlPanel}>
       <NumberInput text={unit.value} setText={setValue} />
       <RowInput text={unit.value.unit} 
       parent={unit.value}
       setText={setUnitValue} />
    </BaseType>
  );
}
