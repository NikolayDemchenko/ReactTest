import React, { useState, useEffect } from "react";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  // console.log("Tag-Page props",props);

  const { setSettings, tag, setSelectedId } = props;

  const [preview, setPrev] = useState(tag);
  // console.log("preview.style :>> ", preview.style);

  const [func, setFunc] = useState({ styleFilter: (p) => p });

  // console.log("func :>> ", func);
  // console.log('preview :>> ', preview);
  // console.log("preview :>> ", preview.style.backgroundColor);
  const setPreview = (prev) => {
    // console.log("preview.style :>> ", prev.style);
    setPrev(prev);
  };
  // console.log('preview.style', preview.style)
  // useEffect(() => {
  //   return () => {
  //     // setSettings({ preview, setPreview, setFunc });
  //   };
  // }, [preview]);
  // const popover = true;
  // const id  = index ? index : "0";

  // console.log("preview.id", preview.id);
  // console.log("tag.id", tag.id);

  return (
    <div
      id={tag.id}
      onClick={(e) => {
        // console.log('preview.style.backgroundColor :>> ', preview.style.backgroundColor);
        e.stopPropagation();
        setSelectedId(tag.id);
        setSettings({ preview, setPreview, setFunc });
      }}
    >
      <TagComponent
        {...props}
        tag={func.styleFilter(preview)}
        // tag={preview}
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
