import React from "react";
import TagView from "./TagView";
export default function TagChildrens({tag, setTag, setPreview, setControlPanel }) {
  // console.log("childrens", tag.childrens);
const setChildsPreview=(childrens)=>{
    setPreview({...tag,childrens})
}
  return tag.childrens.map((children, index) => {
      // console.log('children', children)
    return (
      <div key={index}>
          {/* {index} */}
        <TagView
          tag={ children}
          setTag={setTag}
          setPreview={setPreview}
          setControlPanel={setControlPanel}
        />
      </div>
    );
  });
}
