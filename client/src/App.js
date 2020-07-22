import React from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/Page";

// import AttributesPanel from "./Components/ControlPanel/AttributesPanel/AttributesPanel";

const App = () => {
  return (
    <ErrorBoundry>
      <Page />
    </ErrorBoundry>
  );
};
// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps ? true : false;
// }
// export default React.memo(App, areEqual);
export default App;
