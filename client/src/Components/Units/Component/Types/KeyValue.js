import React from "react";
import TypeSwitch from "../TypeSwitch";
import { keyValue, keyValueElement } from "./Classes";
import BaseType from "../BaseType";
export default function KeyValue({ unit, setUnit, setControlPanel }) {
  console.log("...KeyValue...");
  console.log("!!!!!!keyValue", keyValue);
  unit = unit.key !== undefined? unit : keyValue;

  const setKey = key => {
    setUnit({ ...unit, key });
    console.log("setKey", key);
  };
  const setKeyPanel = () => {
    console.log('setKeyPanel', { unit: unit.key, setUnit: setKey })
    setControlPanel("Хуйпыжня");
  };
  const setValue = value => {
    setUnit({ ...unit, value });
    console.log("setValue", value);
  };
  const setValuePanel = () => {
    setControlPanel({ unit: unit.value, setUnit: setValue });
  };
  console.log("unit", unit);
  console.log("unit.key", unit.key);
  console.log("unit.value", unit.value);

  return (
    // <BaseType unit={unit} setUnit={setUnit} setControlPanel={setControlPanel}>
    <div>
      Пара
      <TypeSwitch
        unit={unit.key}
        setUnit={setKey}
        setControlPanel={setKeyPanel}
      />
      <TypeSwitch
        unit={unit.value}
        setUnit={setValue}
        setControlPanel={setValuePanel}
      />
    </div>
    // </BaseType>
  );
}
