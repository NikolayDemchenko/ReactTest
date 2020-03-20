import React from "react";
import TypeSwitch from "../TypeSwitch";
import { keyValueElement } from "./Classes";
import BaseType from "../BaseType";
export default function KeyValue({ unit, setUnit, setControlPanel }) {
  console.log("...KeyValue...");
  console.log("!!!!!!keyValueElement.value", keyValueElement.value);
  unit.value =
    unit.value.key !== undefined ? unit.value : keyValueElement.value;
  const setKey = key => {
    setUnit({ ...unit, value: { ...unit.value, key } });
    console.log("setKey", key);
  };
  const setKeyPanel = () => {
    setControlPanel({ unit: unit.value.key, setUnit: setKey });
  };
  const setValue = value => {
    setUnit({ ...unit, value: { ...unit.value, value } });
    console.log("setValue", value);
  };
  const setValuePanel = () => {
    setControlPanel({ unit: unit.value.value, setUnit: setValue });
  };
  console.log("unit", unit);
  console.log("unit.value", unit.value);
  console.log("unit.value.key", unit.value.key);
  console.log("!!!!unit.value.value", unit.value.value);
  return (
    // <BaseType unit={unit} setUnit={setUnit} setControlPanel={setControlPanel}>
    <div>
      Пара
      <TypeSwitch
        unit={unit.value.key}
        setUnit={setKey}
        setControlPanel={setKeyPanel}
      />
      <TypeSwitch
        unit={unit.value.value}
        setUnit={setValue}
        setControlPanel={setValuePanel}
      />
    </div>
    // </BaseType>
  );
}
