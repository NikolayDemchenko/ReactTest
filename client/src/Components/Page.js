import React, { useState } from "react";
import Tag from "./Tag/Tag";
import { div } from "./Tag/Classes";
import NavigationPanel from "./ControlPanel/NavigationPanel/NavigationPanel";
export default function Page(props) {
  console.log("Page-App");
  const [page, _setPage] = useState(div);
  const [selectedId, setSelectedId] = useState();
  // console.log("0-page", page);
  // console.log('%cpage.style.backgroundColor',`background-color: ${page.style.backgroundColor}`)
const setPage=(p)=>{
  console.log('setPage', p)
  _setPage(p)
}
  return (
    <div>
      <NavigationPanel
        tag={page}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
      <Tag {...props} tag={page} setTag={setPage} setSelectedId={setSelectedId}/>
    </div>
  );
}
