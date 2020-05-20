import React from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/Page";
const App = () => {
  return (
    <ErrorBoundry>
      <Page />;
    </ErrorBoundry>
  );
};
export default App;
