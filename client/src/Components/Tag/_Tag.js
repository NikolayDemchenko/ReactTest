import React, { useState, useEffect } from "react";
import Element from "./Element";
import log from "../../Log";
export const getParentBranch = (tags, tag, idList = []) => {
  const parentId = tag.parentId;
  if (parentId) {
    idList.push(parentId);
    const parent = tags.find((_tag) => _tag.id === parentId);
    return getParentBranch(tags, parent, idList);
  }
  return idList;
};

const Tag = (props) => {
  // console.log("Tag-Page props", props);

  const { setSettings, tag, page} = props;


  const [preview, setPreview] = useState(tag);
  const [func, setFunc] = useState({ styleFilter: (p) => p });

  useEffect(() => {
    console.log("setPreview");
    setPreview(tag);
    return () => {};
  }, [tag]);

  return (
    <div
      id={tag.id}
      onClick={(e) => {
        e.stopPropagation();
        const tagsForRender = [...getParentBranch(page.tags, tag), tag.id];
        // console.log('tagsForRender :>> ', tagsForRender);
        setSettings({ preview, setPreview, setFunc, tagsForRender });
      }}
    >
      <Element
        {...props}
        tag={func.styleFilter(preview)}     
      />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  // console.log("prevProps.parentBranch", prevProps.parentBranch);
  // console.log("nextProps.parentBranch", nextProps.parentBranch);

  return prevProps.tagsForRender
    ? nextProps.tagsForRender.find((id) => id === nextProps.tag.id)
      ? false
      : true
    : false;
}
// export default Tag;
// export default React.memo(Tag);
export default React.memo(log(Tag), areEqual);
