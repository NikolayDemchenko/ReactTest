import React from "react";
import Tag from "./Tag";
export default function TagChildrens(props) {

  const { tag, setTag, setPreview, setControlPanel } = props;
  const setChildrens = (childrens) => {
    setTag({ ...tag, childrens });
  };
  return tag.childrens.map((children, index) => {
     const setChildren=(child)=>{
      // console.log('child', child)
      tag.childrens[index]=child
      setChildrens(tag.childrens)
    }

    return (
      <div key={index}>     
        <Tag {...props} tag={children} setTag={setChildren}/>
      </div>
    );
  });
}
