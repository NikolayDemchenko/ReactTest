import React from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/View/Pages/Page";

// import AttributesPanel from "./Components/ControlPanel/AttributesPanel/AttributesPanel";

const App = () => {
  return (
    <ErrorBoundry>
       {/* <NavigationPanel
        {...{ tags, addTag, removeTag, savepage, saveNewPage }}
        pageId={page._id}
        selectedId={settings && settings.selectedId}
      /> */}
      <Page />
    </ErrorBoundry>
  );
};
// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps ? true : false;
// }
// export default React.memo(App, areEqual);
export default App;
