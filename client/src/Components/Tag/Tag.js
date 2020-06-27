import React, { useState } from "react";
import Element from "./Element";

const Tag = (props) => {
  // console.log("Tag-Page props",props);

  const { setSettings, tag } = props;
  const [preview, setPreview] = useState(tag);
  const [func, setFunc] = useState({ styleFilter: (p) => p });

  return (
    <div
      id={tag.id}
      onClick={(e) => {
        e.stopPropagation();
        setSettings({ preview, setPreview, setFunc });
      }}
    >
      <Element {...props} tag={func.styleFilter(preview)} />
    </div>
  );
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.page.tags === nextProps.tag ? true : false;
// }
export default Tag;
// export default React.memo(Tag);
