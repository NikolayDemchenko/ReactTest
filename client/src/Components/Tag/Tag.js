import React, { useState } from "react";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  const { setSettings, tag, setTag, index,setSelectedId } = props;
  const [preview, setPreview] = useState(tag);

  // const popover = true;
  const id  = index ? index : "0";

  // console.log("id", id);

  return (
    <div
      id={id}
      onClick={(e) => {
        setSettings({ setTag, tag, preview, setPreview, id });
        setSelectedId(id)
        e.stopPropagation();
    
      }}   
    >
      <TagComponent
        {...props}
        tag={preview ? preview : tag}
        index={id}
      />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(Tag, areEqual);
// export default Tag;
