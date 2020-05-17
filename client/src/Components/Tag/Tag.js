import React, { useState } from "react";
import VerticalPanel from "../ControlPanel/VerticalPanel/VerticalPanel";
import Popover from "../ControlPanel/ModalWindows/PopoverPopupState";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  const [preview, setPrev] = useState();

  const setPreview = React.useCallback(
    (item) => {
      setPrev(item);
    },
    [setPrev]
  );
  console.log("1-Tag!!!");
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
