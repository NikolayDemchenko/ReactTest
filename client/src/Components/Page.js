import React, { useState } from "react";
import Tag from "./Tag/Tag";
import { div } from "./Tag/Classes";
export default function Page() {

  const [page, setPage] = useState(div);

  console.log("0-page",page);
  // console.log('%cpage.style.backgroundColor',`background-color: ${page.style.backgroundColor}`)

 
  return (
      <Tag tag={page} setTag={setPage} /> 
  );
}
