import React, { useState } from "react";
import PropertyInputSwitch from "../Switch/PropertyInputSwitch";
export default function Paper({ value, setValue, setPreview }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setValue(event.target.value);
    }
  };
  const setVal = (value) => {
    settisVal(value);
    setValue(value);
  };
  const [val, settisVal] = useState(value);

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
          width: `${value.length*0.5}em`,
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
        value={val}
        onChange={(e) => settisVal(e.target.value)}
      />
      <div style={{ backgroundColor: "#234c" }}>
        <PropertyInputSwitch
          value={value}
          setValue={setVal}
          setPreview={setPreview}
        />
      </div>
    </div>
  );
}
