import React, { useState, useEffect } from "react";
import htmlTags  from 'html-tags'
import { htmlTags as oftenUsedHtmlTags} from "../../Class/HtmlCss";
import SelectPanel from "../SelectPanel";
export default function CreatePanel(props) {
  const { tag } = props;
  const [item, setItem] = useState(tag.type);
  // const [items, setItems] = useState(htmlTags);
  const ofUsTags=oftenUsedHtmlTags.map((item) => item.value)
  const [items, setItems] = useState(ofUsTags);

// console.log('htmlTags :>> ', htmlTags);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log("handleKeyPress");
      //   setValue(value);
    }
  };
  const setTagType = (type) => {
    console.log("setTagType :>> ", type);
  };

  const changeItem = (item) => {
    const findedTags=htmlTags.filter(tag=>tag.includes(item))
    setItems(findedTags.length>0?findedTags:ofUsTags)
 
  };


  return (
    <div
      style={{
        display: "flex",
        color: "rgba(140, 200, 255, 0.8)",
        width: "200px",
      }}
    >
      type:
      <SelectPanel
        item={item}
        items={items}
        setItem={setItem}
        changeItem={changeItem}
      />
      <div
        style={{
          backgroundColor: "#234c",
          // width: "100px",
        }}
      ></div>
    </div>
  );
}
