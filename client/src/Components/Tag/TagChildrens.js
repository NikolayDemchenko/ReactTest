import React from "react";
import Tag from "./Tag";

function TagChildrens(props) {
  console.log("TagChildrens-TagComponent");

  const { tag, setTag } = props;

  const setChildrens = (childrens) => {
    // console.log("childrens", childrens);
    setTag({ ...tag, childrens });
  };

  return tag.childrens.map((children, index) => {
    const setChildren = (child) => {
      tag.childrens[index] = child;
      setChildrens([...tag.childrens]);
    };

    return (
      <Tag
        {...props}
        key={index}
        tag={children}
        setTag={setChildren}
        index={props.index + "_" + index}
      />
    );
  });
}
export default TagChildrens;
