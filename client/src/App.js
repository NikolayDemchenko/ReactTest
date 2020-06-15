import React, { useState, useEffect } from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/Page";
import AttributesPanel from "./Components/ControlPanel/AttributesPanel/AttributesPanel";
const App = () => {
  const [settings, setSettings] = useState();
  // console.log("App");

  useEffect(() => {
    if (settings) {
      const style = document.getElementById(settings.preview.id).style;
      // console.log("nextId", settings.id, style);
      style.outline = "1px dashed #5af";
    }

    return () => {
      if (settings) {
        const style = document.getElementById(settings.preview.id).style;
        // console.log("prevId", settings.id, style);
        style.outline = "";
      }
    };
  }, [settings]);

  return (
    <ErrorBoundry>
      <Page setSettings={setSettings} />
      {settings && <AttributesPanel {...settings} />}
    </ErrorBoundry>
  );
};
function areEqual(prevProps, nextProps) {
  // console.log("prevProps", prevProps);
  // console.log("nextProps", nextProps);
  return prevProps === nextProps ? true : false;
}
export default React.memo(App, areEqual);
// export default App;
