import React from "react";
import Tag from "./Tag";

function Tags(props) {
  // console.log("TagChildrens-TagComponent");
  // console.log("props", props);
  const { tags, setSettings,setSelectedId } = props;
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
  return tags.map((children, index) => {
    // const setChildren = (child) => {
    //   tag.childrens[index] = child;
    //   setChildrens([...tag.childrens]);
    // };

    return (
      <Tag
        setSettings={setSettings}
        setSelectedId={setSelectedId}
        key={index}
        tag={children}
        // setTag={setChildren}
        // index={props.index + "_" + index}
      />
    );
  });
}
export default Tags;
