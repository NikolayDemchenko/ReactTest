import React from "react";
import PropTypes from "prop-types";
import TypeSwitch from "./TypeSwitch";
import {keyValueType } from "./Classes";
import BaseType from "./BaseType";

 function KeyValue(props) {
   let { unit, setUnit, setControlPanel}=props
  console.log("...KeyValue...");
  
  unit = unit.type === "kv"? unit : keyValueType;

  const setKey = key => {
    setUnit({ ...unit, key });
    console.log("setKey", key);
  };
  const setValue = value => {
    setUnit({ ...unit, value });
    console.log("setValue", value);
  };  
  // console.log("unit", unit);
  console.log("unit.key", unit.key);
  console.log("unit.value", unit.value);

  return (
    <BaseType {...props}>    
      ...
      <TypeSwitch
        unit={unit.key}
        setUnit={setKey}
        setControlPanel={setControlPanel}      
      />
      <TypeSwitch
        unit={unit.value}
        setUnit={setValue}
        setControlPanel={setControlPanel}   
      />    
    </BaseType>
  );
}
KeyValue.propTypes = {
  unit: PropTypes.shape({
    type: PropTypes.string,
    settings: PropTypes.shape({
      size: PropTypes.shape({
        height: PropTypes.string,
        width: PropTypes.string
      }),
      index: PropTypes.number,
      color: PropTypes.array,
      visible: PropTypes.bool
    }),
    value: PropTypes.object
  }),
  setUnit: PropTypes.func
};
export default KeyValue;