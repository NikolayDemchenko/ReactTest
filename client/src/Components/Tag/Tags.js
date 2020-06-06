import React from "react";
import Tag from "./Tag";

function Tags(props) {
  // console.log("TagChildrens-TagComponent");
  // console.log("props", props);
  const { tags, setSettings, setSelectedId, selectedId } = props;
  // const { tag, setTag } = props;

  // const setChildrens = (childrens) => {
  //   // console.log("childrens", childrens);
  //   setTag({ ...tag, childrens });
  // };

  // return tag.childrens.map((children, index) => {
  //   const setChildren = (child) => {
  //     tag.childrens[index] = child;
  //     setChildrens([...tag.childrens]);
  //   };
  return props.tags.map((tag, index) => {
    // const setChildren = (child) => {
    //   tag.childrens[index] = child;
    //   setChildrens([...tag.childrens]);
    // };
    return (
      <Tag
        {...props}
        key={index}
        tag={tag}
        // setTag={setChildren}
        // index={props.index + "_" + index}
      />
    );
  });
}
export default Tags;
