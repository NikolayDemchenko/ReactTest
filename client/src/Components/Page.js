import React, { useState } from "react";
import Tag from "./Tag/Tag";
import { div } from "./Tag/Classes";
import NavigationPanel from './ControlPanel/NavigationPanel/NavigationPanel'
export default function Page(props) {
  const [page, setPage] = useState(div);
  
  console.log("0-page", page);
  // console.log('%cpage.style.backgroundColor',`background-color: ${page.style.backgroundColor}`)

  return (
    <div>
      <NavigationPanel tag={page} setTag={setPage}/>
      <Tag {...props }tag={page} setTag={setPage} />
    </div>
  );
}
