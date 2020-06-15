import React, { useState } from "react";
import Tags from "./Tag/Tags";
import {tagStructure } from "./Tag/Classes";
import NavigationPanel from "./ControlPanel/NavigationPanel/NavigationPanel";
// import FileSaver from "file-saver";
export default function Page(props) {
  // console.log("Page-App");
  const [tags, setTags] = useState(tagStructure);
  const [selectedId, setSelectedId] = useState();
  // console.log("0-page", page);
  // console.log("%ctagStructure", `color: green`, tagStructure);

// console.log('selectedId :>> ', selectedId);

  // FileSaver.saveAs(
  //   new Blob([JSON.stringify(page)], {
  //     type: "application/json;charset=utf-8",
  //   })
  // );

  // const setPage = (p) => {
  //   console.log("setPage", p);
  //   _setPage(p);
  // };

  // console.log("props", props);
  // const _tag = page.tags.find((tag) => tag.parentId === null);
  // console.log("_tag", _tag);
  return (
    <div>
      <NavigationPanel
        tags={tags}
        setTags={setTags}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Tags
        {...props}
        tags={tagStructure}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      /> 
    </div>
  );
}
