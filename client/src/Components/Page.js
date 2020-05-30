import React, { useState } from "react";
import Tag from "./Tag/Tag";
import Tags from "./Tag/Tags";
import { div, page, tagStructure } from "./Tag/Classes";
import NavigationPanel from "./ControlPanel/NavigationPanel/NavigationPanel";
import FileSaver from "file-saver";
export default function Page(props) {
  console.log("Page-App");
  const [_page, _setPage] = useState(div);
  const [selectedId, setSelectedId] = useState();
  // console.log("0-page", page);
  console.log("%ctagStructure", `color: green`, tagStructure);

  // FileSaver.saveAs(
  //   new Blob([JSON.stringify(page)], {
  //     type: "application/json;charset=utf-8",
  //   })
  // );

  const setPage = (p) => {
    console.log("setPage", p);
    _setPage(p);
  };

  // console.log("props", props);
  const _tag = page.tags.find((tag) => tag.parentId === null);
  // console.log("_tag", _tag);
  return (
    <div>
      <NavigationPanel
        tag={_page}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Tags {...props} tags={tagStructure} setSelectedId={setSelectedId} />

      {/* <Tag
        {...props}
        page={page}
        tag={_page}
        setTag={setPage}
        setSelectedId={setSelectedId}
      /> */}
    </div>
  );
}
