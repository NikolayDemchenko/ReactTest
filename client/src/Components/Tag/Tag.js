import React, { useState, useEffect } from "react";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  // console.log("Tag-Page props",props);

  const { setSettings, tag, selectedId, setSelectedId } = props;

 

  const [preview, setPrev] = useState(tag);
  // console.log('preview :>> ', preview);
  // console.log("preview :>> ", preview.style.backgroundColor);
  const setPreview = (prev) => {
    setPrev(prev);
  };
  // console.log('preview.style', preview.style)
  // useEffect(() => {
  //   setPrev(tag);
  //   return () => {};
  // }, [selectedId]);
  // const popover = true;
  // const id  = index ? index : "0";

  // console.log("preview.id", preview.id);
  // console.log("tag.id", tag.id);


  return (
    <div
      id={tag.id}
      onClick={(e) => {
        // console.log('preview.style.backgroundColor :>> ', preview.style.backgroundColor);
        console.log("tag.id :>> ", tag.id);
        console.log("selectedId :>> ", selectedId);
        console.log("equal id :>> ", selectedId === tag.id && true);
        e.stopPropagation();
        setSelectedId(tag.id);
        setSettings({ preview, setPreview });
      }}
    >
      <TagComponent
        {...props}
        tag={preview}
        // index={id}
      />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(Tag);
// export default Tag;
