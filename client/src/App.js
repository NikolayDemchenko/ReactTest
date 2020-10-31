import React, { useState, useEffect } from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/View/Pages/Page";
import { page as _page } from "./Components/View/Pages/CreateApp";
// import AttributesPanel from "./Components/ControlPanel/AttributesPanel/AttributesPanel";
const App = () => {
  const [settings, setSettings] = useState();
  const [page, setPage] = useState(JSON.parse(JSON.stringify(_page)));
  return (
    <ErrorBoundry>
      {/* <NavigationPanel
        {...{ tags, addTag, removeTag, savepage, saveNewPage }}
        pageId={page._id}
        selectedId={settings && settings.selectedId}
      /> */}
      <Page {...{ page, setPage,settings, setSettings }} />
    </ErrorBoundry>
  );
};
// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps ? true : false;
// }
// export default React.memo(App, areEqual);
export default App;
