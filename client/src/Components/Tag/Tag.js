import React, { useState, useEffect } from "react";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  // console.log("Tag-Page props",props);

  const { setSettings, tag, setSelectedId } = props;
  const [preview, setPrev] = useState(tag);
  // console.log('preview :>> ', preview);
  const setPreview = (prev) => {
    // console.log("prev :>> ", prev);
    setPrev(prev);
  };
  // console.log('preview.style', preview.style)
  // useEffect(() => {
  //   return () => {};
  //   setSettings({ preview, setPreview });
  // }, [preview]);
  // const popover = true;
  // const id  = index ? index : "0";

  // console.log("id", preview.id);

  return (
    <div
      id={preview.id}
      onClick={(e) => {
        console.log('preview.style.backgroundColor :>> ', preview.style.backgroundColor);
        setSettings({ preview, setPreview });
        setSelectedId(preview.id);
        e.stopPropagation();
      }}
    >
      <TagComponent
        // {...props}
        setSelectedId={setSelectedId}
        setSettings={setSettings}
        tag={preview ? preview : tag}
        // index={id}
      />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(Tag, areEqual);
// export default Tag;
