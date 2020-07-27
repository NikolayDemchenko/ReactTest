import React, { useState, useEffect } from "react";
import Element from "./Element";

export const getParentBranch = (tags, tag, idList=[]) => {
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

  const { setSettings, tag, page, tagsForRender } = props;

  // parentBranch&&console.log('parentBranch :>> ', parentBranch);
  // console.log(
  //   " parentBranch&&parentBranch.find(id=>id===tag.id) :>> ",
  //   parentBranch && parentBranch.filter((id) => id != tag.id)
  // );
  const pBr= tagsForRender &&[...tagsForRender.filter((id) => id != tag.id)]
  // const [edit, setEdit] = useState(false);
  // console.log('parentBranch :>> ', parentBranch);
  const [preview, setPreview] = useState(tag);
  const [func, setFunc] = useState({ styleFilter: (p) => p });

  useEffect(() => {
    setPreview(tag);
    return () => {};
  }, [tag, page]);


  // console.log('getParentBranch(page.tags,tag) :>> ', [...getParentBranch(page.tags,tag,[]),tag.id]);
  return (
    <div
      id={tag.id}
      onClick={(e) => {
        e.stopPropagation();
        // console.log("id :>> ", tag.id);
        // console.log("id :>> ", preview.id);
        const tagsForRender = [...getParentBranch(page.tags, tag), tag.id];
        console.log('tagsForRender :>> ', tagsForRender);
        setSettings({ preview, setPreview, setFunc, tagsForRender });
      }}
    >
      <Element
        {...props}
        tag={func.styleFilter(preview)}
        tagsForRender={pBr}
      />
    </div>
  );
};

function areEqual(prevProps, nextProps) {
  // console.log("prevProps.parentBranch", prevProps.parentBranch);
  // console.log("nextProps.parentBranch", nextProps.parentBranch);

  return nextProps.parentBranch?nextProps.parentBranch.find((id) => id === nextProps.tag.id)
    ? false
    : true:false
}
// export default Tag;
// export default React.memo(Tag);
export default React.memo(Tag, areEqual);
