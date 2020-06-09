import React, { useState, useEffect } from "react";
import Select from "../ModalWindows/Select";
import { htmlTags } from "../../Class/HtmlCss";
export default function CreatePanel(props) {
  const { setValue,tag } = props;
//   const [value, setThisValue] = useState(props.value);
  // console.log("Paper value", value);
//   const [width] = useState(`100%`);
//   useEffect(() => {
//     setThisValue(props.value);
//     return () => {};
//   }, [props.value]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("handleKeyPress");
    //   setValue(value);
    }
  };

  const setTagType=(type)=>{
      console.log('setTagType :>> ', type);
  }
  return (
    <div style={{display:"flex", color: "#eee"}}>
        type:
         <Select
          defaultItem={tag.type}
          setItem={setTagType}
          listItems={htmlTags}
        />
      <div
        style={{
          backgroundColor: "#234c",
          // width: "100px",
        }}
      >
        {/* <PropertyInputSwitch {...props} value={value} setValue={setValue} /> */}
      </div>
    </div>
  );
}
