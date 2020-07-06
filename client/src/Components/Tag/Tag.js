import React, { useState, useEffect } from "react";
import Element from "./Element";

const Tag = (props) => {
  // console.log("Tag-Page props",props);

  const { setSettings, tag,page } = props;
  // const [edit, setEdit] = useState(false);
  const [preview, setPreview] = useState(tag);
  const [func, setFunc] = useState({ styleFilter: (p) => p });

  useEffect(() => {
    setPreview(tag);
    return () => {
      
    };
  }, [tag,page]);

  return (
    <div
      id={tag.id}
      onClick={(e) => {
        e.stopPropagation();
        // console.log("id :>> ", tag.id);
        // console.log("id :>> ", preview.id);
        setSettings({ preview, setPreview, setFunc });
      }}
    >
      <Element {...props} tag={func.styleFilter(preview)} />
      {/* {edit?<Element {...props} tag={func.styleFilter(preview)} />:<Element {...props} tag={tag} />} */}
    </div>
  );
};

// function areEqual(prevProps, nextProps) {
//   return prevProps.page.tags === nextProps.page.tags ? true : false;
// }
// export default Tag;
export default React.memo(Tag);
// export default React.memo(Tag,areEqual);
