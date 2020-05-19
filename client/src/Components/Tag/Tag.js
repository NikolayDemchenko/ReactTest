import React, { useState,useEffect } from "react";
import VerticalPanel from "../ControlPanel/VerticalPanel/VerticalPanel";
import Popover from "../ControlPanel/ModalWindows/PopoverPopupState";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  const [preview, setPreview] = useState(props.tag);

// useEffect(() => {
//   setPreview(props.tag)    
//   return () => {
//   }
// }, [props.tag])
  // console.log('%ctag.style.backgroundColor',`background-color: ${props.tag.style.backgroundColor}`)
  // console.log('%cpreview.style.backgroundColor',`background-color: ${preview.style.backgroundColor}`)

  // const setPreview = React.useCallback(
  //   (item) => {
  //     setPrev(item);
  //   },
  //   [setPrev]
  // );
  // console.log("1-Tag!!!",props.tag.style);
  // console.log("Tag preview!!!",preview.style);
  return (
    <Popover
      PaperProps={{
        style: { background: "rgba(43,50,66,.95)" },
      }}
      anchorReference="anchorPosition"
      anchorPosition={{ top: 0, left: 0 }}
    >
      <TagComponent {...props} preview={preview} />
      <VerticalPanel {...props} preview={preview} setPreview={setPreview} />
    </Popover>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(Tag, areEqual);
// export default Tag;
