import React, { useContext, useState } from "react";
import { Context, TagManager } from "../../../../AppFunction";
import TagCRUDbtn from "../TagCRUDbtn";
import { tagList as elementList } from "../../../Class/HtmlCss";
import { TagList } from "../Tags/TagList";
function NavPages({ selection, setSelection }) {
  const { state } = useContext(Context);
  const pageList =
    state && state.pageList ? state.pageList : [{ ...state.page }];
  // console.log('pageList', pageList);
  return pageList.map((page, index) => {
    // console.log("page :>> ", page);
    return (
      <NavPage
        pageList={pageList}
        key={index}
        page={page}
        {...{ selection, setSelection }}
      />
    );
  });
}
function NavPage({ page, pageList, selection, setSelection }) {
  // console.log('page :>> ', page);
  const { RESTManager, state, setState } = useContext(Context);
  const { createTag } = TagManager(state, setState);

  page = page._id === state.page._id ? state.page : page;

  const getPageById = (id) => {
    console.log("getPageById :>> ", id);
    RESTManager.getPageById(id).then((page) => {
      console.log("page :>> ", page);
      setState((state) => ({        
        pageList: state.pageList,
        page,
      }));
    });
  };

  const remove = () => {
    RESTManager.removePageById(page._id);
    getPageById(pageList[0]._id);
  };
  let background = "rgba(30,40,57,.8)";
  let showButtons = false;
  selection === page.name &&
    (background = "rgb(30,40,57)") &&
    (showButtons = true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        onClick={(e) => {
          console.log("onClick");
          e.stopPropagation();
          e.preventDefault();
          setSelection(page.name);
          state.page._id !== page._id && getPageById(page._id);
          // console.log("id :>> ", id);
        }}
        style={{
          display: "flex",
          borderBottom: "2px solid #55667766",
          background,
          cursor: "default",
        }}
      >
        <div title={"page name"}>{page.name}</div>
        {showButtons && (
          <div style={{ margin: "0 4px 4px auto" }}>
            <TagCRUDbtn {...{ create: createTag, remove, elementList }} />
          </div>
        )}
      </div>
      <div style={{ marginLeft: "12px" }}>
        {page.nodes && <TagList {...{ selection, setSelection, page }} />}
      </div>
    </div>
  );
}

export default NavPages;
