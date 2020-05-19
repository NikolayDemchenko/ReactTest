import React, { useState } from "react";
import PropertyInputSwitch from "../Switch/PropertyInputSwitch";
export default function Paper(props) {
  const { value, setValue } = props;
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
    }
  }; 

  return (
    <div
      style={{
        color: "#eee",
      }}
    >
      <input
        // size={value.length>10?value.length:value.length}
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
        type={"text"}
        onKeyPress={handleKeyPress}
        onBlur={(e) => setValue(e.target.value)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div style={{ backgroundColor: "#234c" }}>
        <PropertyInputSwitch
          {...props}
          setValue={setValue}       
        />
      </div>
    </div>
  );
}
