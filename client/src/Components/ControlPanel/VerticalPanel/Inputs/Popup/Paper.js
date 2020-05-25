import React, { useState } from "react";

import PropertyInputSwitch from "../Switch/PropertyInputSwitch";
export default function Paper(props) {
  const [value, setThisValue] = useState(props.value);
  // console.log("Paper value", value);
  
  const setValue=(val)=>{
    setThisValue(val)
    props.setValue(val);
  }
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
    }
  };

  return (
    <div style={{ color: "#eee" }}>
      <input
        style={{
          background: "transparent",
          width: `${value.length * 0.5}em`,
          minWidth: "80px",
          paddingLeft: "4px",
          outline: "none",
          border: 0,
          color: "#eee",
          fontSize: "15px",
        }}
        // type={"text"}
        onKeyPress={handleKeyPress}
        onBlur={(e) => {
          setValue(e.target.value);
          // props.setValue(e.target.value);
        }}
        value={value}
        onChange={(e) => {
          // console.log('e.currentTarget', e.currentTarget)
          console.log("e.target.value", e.target.value);
          setValue(e.target.value);
          // props.setValue(e.target.value);
        }}
      />
      <div style={{ backgroundColor: "#234c" }}>
        <PropertyInputSwitch {...props} setValue={setValue} />
      </div>
    </div>
  );
}
