import React from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Component from "./Components/View/Pages/Components/Component";

// import AttributesPanel from "./Components/ControlPanel/AttributesPanel/AttributesPanel";

const App = () => {
  return (
    <ErrorBoundry>
      <Component />
    </ErrorBoundry>
  );
};
// function areEqual(prevProps, nextProps) {
//   return prevProps === nextProps ? true : false;
// }
// export default React.memo(App, areEqual);
export default App;
