import React, { useState } from "react";

import VerticalPanel from "../ControlPanel/VerticalPanel/VerticalPanel";
import Popover from "../ControlPanel/ModalWindows/PopoverPopupState";
import TagComponent from "./TagComponent";

const Tag = (props) => {
  const [preview, setPreview] = useState(props.tag);

  const popover = true;

  return (
    <>
      {popover ? (
        <Popover
          PaperProps={{
            style: { background: "rgba(43,50,66,.95)" },
          }}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 0, left: 0 }}
        >
          <div style={{ border: "1px dashed #5af" }}>
            <TagComponent {...props} preview={preview} />
          </div>
          <VerticalPanel {...props} preview={preview} setPreview={setPreview} />
        </Popover>
      ) : (
        <TagComponent {...props} preview={preview} />
      )}
    </>
  );
};

function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(Tag, areEqual);
// export default Tag;
