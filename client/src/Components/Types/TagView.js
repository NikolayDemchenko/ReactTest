import React, { useState } from "react";
import Tag from "./Tag";

export default function TagView(props) {
  // console.log("!!!Preview!!!");

  const [preview, setPreview] = useState();
  // console.log('preview', preview)

  return (
    <div>
      <Tag
        {...props}
        tag={preview ? preview : props.tag}
        setPreview={setPreview}
      />
      {/* {JSON.stringify(unit)} */}
    </div>
  );
}
