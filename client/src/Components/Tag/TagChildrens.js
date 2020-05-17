import React from "react";
import Tag from "./Tag";

function TagChildrens(props) {
  console.log("3-TagChildrens");
  const { tag, setTag } = props;
  const setChildrens = (childrens) => {
    console.log("childrens", childrens);
    setTag({ ...tag, childrens });
  };

  return tag.childrens.map((children, index) => {
    const setChildren = (child) => {
      // console.log('child', child)
      tag.childrens[index] = child;
      setChildrens(tag.childrens);
    };

    return (
      <div key={index}>  
        <Tag {...props} tag={children} setTag={setChildren} />
      </div>
    );
  });
}
export default React.memo(TagChildrens);
