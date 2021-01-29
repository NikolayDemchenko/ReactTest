import React from "react";
import Page from "../View/Pages/Page";
import AttributesPanel from "./AttributesPanel/AttributesPanel";
import { TagFunctions, Context } from "../../AppFunction";

const Editor = ({ RESTManager, setState, state }) => {
  const page = state.page;
  const setPage = (page) => {
    console.log('page', page)
    setState((state) => ({ ...state, page }));
  };
  console.log("state :>> ", state);

  const { createTag, removeTag, updateTag, classes } = TagFunctions(
    page,
    setPage,
    setState
  );

  const onClick =
    state && state.assignStyleId
      ? (node) => updateTag(node.id, "styleId", state.assignStyleId)
      : (node) => setState((state) => ({ ...state, node }));

  return (
    <Context.Provider
      value={{
        createTag,
        removeTag,
        updateTag,
        RESTManager,
        page,
        setPage,
        state,
        setState,
      }}
    >
      {state.node && <AttributesPanel />}
      <Page
        {...{
          bodyStyle: page.bodyStyle,
          selectedId: state && state.node && state.node.id,
          onClick,
          classes,
        }}
      />
    </Context.Provider>
  );
};

export default Editor;
