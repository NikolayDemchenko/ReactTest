import React, { useState } from "react";
import TagComponent from "./TagComponent";

function TagView(props) {
  const [preview, setPrev] = useState();

  const setPreview =React.useCallback( (item) => {
    setPrev(item);
  },[setPrev]);
  console.log("2-TagView!!!");
  return (
    <div>
      <TagComponent
        {...props}
        tag={props.tag}
        preview={preview}
        setPreview={setPreview}
      />
      {/* {JSON.stringify(unit)} */}
    </div>
  );
}
export default React.memo(TagView);
