import React, { useState, useEffect } from "react";

import PropertyInputSwitch from "../Switch/PropertyInputSwitch";
export default function Paper(props) {
  const { setValue,setPreview } = props;
  const [value, setThisValue] = useState(props.value);
  // console.log("Paper value", value);
  // const [width] = useState("100%");
  useEffect(() => {
    setThisValue(props.value);
    return () => {};
  }, [props.value]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("handleKeyPress");
      console.log('value :>> ', value);
      setPreview(value);
      setValue(value);
    }
  };

  return (
    <div style={{ color: "#eee", width:"100%" }}>
      <input
        style={{
          background: "transparent",
          width:"100%" ,
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
      <div
        style={{
          backgroundColor: "#234c",
          // width: "100px",
        }}
      >
        <PropertyInputSwitch {...props} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
