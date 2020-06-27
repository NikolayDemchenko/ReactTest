import React from "react";
import Tag from "./Tag";
function Tags({ tags, page, setSettings}) {
  return tags.map((tag, index) => {
    // console.log("tag :>> ", tag);
    // console.log("pageTags :>> ", pageTags);
    return ( 
      <Tag
        page={page}
        setSettings={setSettings}
        key={index}
        tag={tag}
      />
    );
  });
}
function areEqual(prevProps, nextProps) {
  // console.log('prevProps.page.tags :>> ', prevProps.page.tags);
  // console.log('nextProps.page.tags :>> ', nextProps.page.tags);
  return prevProps.page.tags === nextProps.page.tags ? true : false;
}
// export default Tags;
// export default React.memo(Tags);
export default React.memo(Tags,areEqual);