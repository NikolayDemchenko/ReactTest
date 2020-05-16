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
function areEqual(prevProps, nextProps) {
  return prevProps.tag===nextProps.tag?true:false
   }
 export default React.memo(TagView,areEqual);
// export default React.memo(TagView);
