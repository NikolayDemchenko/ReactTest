import React, { useState } from "react";
import TagComponent from "./TagComponent";

export default function TagView(props) {
  const [preview, setPreview] = useState();
  // console.log('preview', preview)
  return (
    <div>
      <TagComponent
        {...props}
        tag={preview ? preview : props.tag}
        setPreview={setPreview}
      />
      {/* {JSON.stringify(unit)} */}
    </div>
  );
}
