import React from "react";
import Tag from "./Tag";

function Tags({tags, page, setSettings, setPage }) {
  return tags.map((tag, index) => {
    // console.log("tag :>> ", tag);
    return (
      <Tag page={page} setPage={setPage} setSettings={setSettings} key={index} tag={tag} />
    );
  });
}
export default Tags;
