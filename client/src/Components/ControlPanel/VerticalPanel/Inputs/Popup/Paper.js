import React, { useState, useEffect } from "react";

import PropertyInputSwitch from "../Switch/PropertyInputSwitch";
export default function Paper(props) {
  const { setValue } = props;
  const [value, setThisValue] = useState(props.value);
  // console.log("Paper value", value);

  useEffect(() => {
    setThisValue(props.value);
    return () => {};
  }, [props.value]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("handleKeyPress");
      setValue(value);
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
          setValue(value);
          // props.setValue(e.target.value);
        }}
        value={value}
        onChange={(e) => {
          console.log("e.target.value", e.target.value);
          setThisValue(e.target.value);
        }}
      />
      <div style={{ backgroundColor: "#234c" }}>
        <PropertyInputSwitch {...props} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
