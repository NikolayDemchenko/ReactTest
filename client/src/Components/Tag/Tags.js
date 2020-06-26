import React from "react";
import Tag from "./Tag";
import Element from "./Element";
function Tags({ tags, page, setSettings, setPage, edit, pageTags }) {
  return tags.map((tag, index) => {
    // console.log("tag :>> ", tag);
    // console.log("pageTags :>> ", pageTags);
    return (
      <Element
        page={page}
        // pageTags={pageTags}
        edit={edit}
        setPage={setPage}
        setSettings={setSettings}
        key={index}
        tag={tag}
      />
      // <Tag
      //   page={page}
      //   pageTags={pageTags}
      //   setPage={setPage}
      //   setSettings={setSettings}
      //   key={index}
      //   tag={tag}
      // />
    );
  });
}
export default Tags;
