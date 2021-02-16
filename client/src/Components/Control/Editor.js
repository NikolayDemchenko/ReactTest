import React, { useContext } from "react";
import Page from "../View/Pages/Page";
import AttributesPanel from "./AttributesPanel/AttributesPanel";
import { TagManager, Context } from "../../AppFunction";

const Editor = () => {
  const { state, setState, RESTManager } = useContext(Context);
  console.log("Editor");
  const page = state.page;
  const node = page.nodes.find(({ id }) => state.nodeId === id);
  const nodeStyle = node && page.styles.find(({ id }) => id === node.styleId);
  // console.log('nodeStyle', nodeStyle)
  // console.log('node :>> ', node);
  // console.log('state :>> ', state);
  //   console.log("page.nodes :>> ", page.nodes);
  const { updateTag, classes } = TagManager(state, setState);

  const onClick =
    state && state.assignStyleId
      ? (nodeId) => updateTag(nodeId, "styleId", state.assignStyleId)
      : (nodeId) => setState((state) => ({ ...state, nodeId }));

  return (
    <Context.Provider
      value={{
        updateTag,
        RESTManager,
        page,
        node,
        nodeStyle,
        state,
        setState,
      }}
    >
      {node && <AttributesPanel />}
      <Page
        {...{
          bodyStyle: page.bodyStyle,
          selectedId: state && state.nodeId,
          onClick,
          classes,
        }}
      />
    </Context.Provider>
  );
};

export default Editor;
