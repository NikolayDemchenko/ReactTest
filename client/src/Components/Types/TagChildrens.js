import React from "react";
import Tag from "./Tag";
export default function TagChildrens({tag, setTag, setPreview, setControlPanel }) {
  console.log("childrens", tag.childrens);
const setChildsPreview=(childrens)=>{
    setPreview({...tag,childrens})
}
  return tag.childrens.map((children, index) => {
      console.log('children', children)
    return (
      <div key={index}>
          {/* {index} */}
        <Tag
          tag={ children}
        //   setTag={setTag}
        //   setPreview={setPreview}
        //   setControlPanel={setControlPanel}
        />
      </div>
    );
  });
}
