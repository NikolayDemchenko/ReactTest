import React, { useState } from "react";
import ErrorBoundry from "./ErrorBoundry";
import Page from "./Components/View/Pages/Page";
import { page as _page } from "./Components/View/Pages/CreateApp";
import { Portal } from "react-portal";
import AttributesPanel from "./Components/Control/AttributesPanel/AttributesPanel";
import NavigationPanel from "./Components/Control/NavigationPanel/NavigationPanel";
import { GetRESTManager,NavigationContext } from "./AppFunction";
import Editor from "./Components/Control/Editor";

const App = () => {
  const [state, setState] = useState({page:_page});
  // const [page, _setPage] = useState(_page);
  state && console.log("state :>> ", state.nodeId);
  // const setPage = (page) => {
  //   // console.log("page :>> ", page);
  //   _setPage(page);
  //   // console.log("setPage");
  // };

  // state&&sessionStorage.setItem('state', JSON.stringify(state))

  // page&&sessionStorage.setItem('page', JSON.stringify(page))

  // console.log('JSON.parse(sessionStorage.getItem("page")) :>> ', JSON.parse(sessionStorage.getItem("page")));

  // JSON.parse(localStorage.getItem("state"))
  // const savedState= JSON.parse(localStorage.getItem("state"))
  // savedState&&setState(savedState)

  // console.log("page", page);

  // console.log(
  //   "localStorage.getItem('state') :>> ",
  //   JSON.parse(localStorage.getItem("state"))
  // );
  // const { createTag, removeTag, updateTag, classes } = TagManager(
  //   state.page,
  //   setPage,
  //   setState
  // );

  const RESTManager = GetRESTManager(state.page, setState);

  // const onClick =
  //   state && state.assignStyleId
  //     ? (node) => updateTag(node.id, "styleId", state.assignStyleId)
  //     : (node) => setState((state) => ({ ...state, node }));

  return (
    <ErrorBoundry>
      <NavigationContext.Provider
        value={{
          RESTManager,        
          state,
          setState,
        }}
      >
        <NavigationPanel />
        {/* {state && state.node && (
          <Portal>
            <AttributesPanel />
          </Portal>
        )}
        {page && (
          <Page
            {...{
              bodyStyle: page.bodyStyle,
              selectedId: state && state.node && state.node.id,
              onClick,
              classes,
            }}
          />
        )} */}
      </NavigationContext.Provider>
      <Editor {...{ RESTManager, setState, state }} />
    </ErrorBoundry>
  );
};
// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps ? true : false;
// }
// export default React.memo(App, areEqual);
export default App;
