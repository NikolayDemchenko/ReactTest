import React, { useState } from "react";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  const [preview, setPreview] = useState(props.tag);

  let index = props.index ? props.index : 0;
  // const popover = true;
  const id = preview.type + "_" + index;
  console.log("id", id);
  return (
    <div
      id={id}
      key={id}
      onClick={(e) => {
        props.setSettings({ ...props, preview, setPreview });
        e.stopPropagation();
      }}
      style={{ border: "1px dashed #5af" }}
    >
      <TagComponent
        {...props}
        tag={preview ? preview : props.tag}
        index={index}
      />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(Tag, areEqual);
// export default Tag;
