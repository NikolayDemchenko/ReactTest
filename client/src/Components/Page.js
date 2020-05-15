import React, { useState } from "react";
import Tag from "./Tag/Tag";
import { PageContext } from "./ControlPanel/ControlsContext";
import { div } from "./Tag/Classes";
export default function Page() {
  const [clearPanel, setclear] = useState();
  const [page, setPage] = useState(div);

  // console.log("page", page);

  const setclearPanel = (item) => {
    // console.log("setclearPanel", item);
    setclear(item);
  };
 
  return (
    <PageContext.Provider
      value={{
        clearPanel,
        setclearPanel,
      }}
    >
      <Tag tag={page} setTag={setPage} />
    </PageContext.Provider>
  );
}
