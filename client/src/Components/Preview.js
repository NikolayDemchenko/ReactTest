import React, { useState } from "react";
import Tag from "./Types/Tag";

export default function Preview({ tag, setTag, setControlPanel }) {
  // console.log("!!!Preview!!!");

  const [preview, setPreview] = useState();
  // console.log('preview', preview)

  return (
    <div>
      <Tag
        tag={preview ? preview : tag}
        setTag={setTag}
        setPreview={setPreview}
        setControlPanel={setControlPanel}
      />
      {/* {JSON.stringify(unit)} */}
    </div>
  );
}
