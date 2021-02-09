import React, { useContext } from "react";
import { NavigationContext,TagManager } from "../../../../AppFunction";
import TagCRUDbtn from "../TagCRUDbtn";
import { tagList as elementList } from "../../../Class/HtmlCss";
function NavPages() {
  const { state } = useContext(NavigationContext);

  const pageList = state && state.pageList ? state.pageList : [];
  // console.log('pageList', pageList)
  return pageList.map((page, index) => {
    // console.log('page', page)
    return <NavPage pageList={pageList} key={index} page={page} />;
  });
}
function NavPage({ page, pageList }) {
  const { RESTManager, state, setState } = useContext(NavigationContext);

  const { createTag } = TagManager(state, setState);
  // const  = context;

  // console.log("context.page", context.page);
  // console.log("page", page);

  const remove = async () => {
    RESTManager.removePageById(page._id);
    RESTManager.getPageById(pageList[0]._id);
  };
  let background = "rgba(30,40,57,.8)";
  let showButtons = false;

  if (state.page && state.page._id === page._id) {
    background = "rgb(30,40,57)";
    showButtons = true;
  }

  return (
    <div
      onClick={(e) => {
        console.log("onClick");
        e.preventDefault();
        state.page._id !== page._id && RESTManager.getPageById(page._id);
        // console.log("id :>> ", id);
      }}
      style={{
        display: "flex",
        borderBottom: "2px solid #55667766",
        background,
        cursor: "default",
        // outline: "1px solid white",
      }}
    >
      {/* {toggle} */}
      {page.name}
      {showButtons && (
        <div
          style={{
            //  outline: "1px solid white",
            margin: "0 4px 4px auto",
          }}
        >
          <TagCRUDbtn {...{ create: createTag, remove, elementList }} />
        </div>
      )}
    </div>
  );
}

export default NavPages;
