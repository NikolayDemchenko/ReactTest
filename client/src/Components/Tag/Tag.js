import React, { useState } from "react";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  // console.log("Tag-Page props",props);

  const { setSettings, tag } = props;

  const [preview, setPrev] = useState(tag);
  // console.log("preview.style :>> ", preview.style);

  const [func, setFunc] = useState({ styleFilter: (p) => p });

  const setPreview = (prev) => {
    // console.log("preview.style :>> ", prev.style);
    setPrev(prev);
  };  

  return (
    <div
      id={tag.id}
      onClick={(e) => {
        e.stopPropagation();  
        setSettings({ preview, setPreview, setFunc });
      }}
    >
      <TagComponent
        {...props}
        tag={func.styleFilter(preview)}
      />
    </div>
  );
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.tag === nextProps.tag ? true : false;
// }
export default React.memo(Tag);
// export default Tag;
