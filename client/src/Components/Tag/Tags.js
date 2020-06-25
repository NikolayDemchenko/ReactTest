import React from "react";
import Tag from "./Tag";

function Tags({ tags, page, setSettings, setPage, pageTags }) {
  return tags.map((tag, index) => {
    // console.log("tag :>> ", tag);
    console.log("pageTags :>> ", pageTags);
    return (
      <Tag
        page={page}
        pageTags={pageTags}
        setPage={setPage}
        setSettings={setSettings}
        key={index}
        tag={tag}
      />
    );
  });
}
export default Tags;
