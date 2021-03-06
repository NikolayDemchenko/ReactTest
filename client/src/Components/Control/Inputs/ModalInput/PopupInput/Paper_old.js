import React, { useState, useEffect } from "react";
import PropertyInputSwitch from "../Switch/PropertyInputSwitch";
const  Paper=(props)=> {
  const { setValue, setPreview } = props;
  const [value, setThisValue] = useState(props.value);
  // const setPreview = props.setPreview ? props.setPreview : setValue;
  // console.log("Paper value", value);
  // console.log("props.value", props.value);
  // const [width] = useState("100%");
  useEffect(() => {
    // console.log("useEffect in");
    setThisValue(props.value);
    return () => {
      // console.log("useEffect out");
    };
  }, [props.value]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("handleKeyPress");
      console.log("value :>> ", value);
      setPreview && setPreview(value);
      setValue(value ? value : props.value);
    }
  };

  return (
    <div style={{ color: "#eee", width: "100%" }}>
      <input
        style={{
          background: "transparent",
          width: "100%",
          minWidth: "80px",
          paddingLeft: "4px",
          outline: "none",
          border: 0,
          color: "#eee",
          fontSize: "15px",
        }}
        onKeyPress={handleKeyPress}
        onBlur={(e) => {
          setValue(value ? value : props.value);
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
        <PropertyInputSwitch {...{ ...props, value }} />
      </div>
    </div>
  );
}
export default  Paper