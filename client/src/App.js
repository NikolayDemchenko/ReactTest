import React, { useState, useEffect } from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/Page";
import VerticalPanel from "./Components/ControlPanel/VerticalPanel/VerticalPanel";
const App = () => {
  const [settings, setSettings] = useState();

  // settings&&console.log('settings.id', settings.id)
  // settings&&console.log('settings.tag.style.backgroundColor', settings.tag.style.backgroundColor)

  useEffect(() => {
    if (settings) {
      const style = document.getElementById(settings.id).style;
      // console.log("nextId", settings.id, style);
      style.outline = "1px dashed #5af";
    }
    return () => {
      if (settings) {
        const style = document.getElementById(settings.id).style;
        // console.log("prevId", settings.id, style);
        style.outline = "";
      }
    };
  }, [settings]);

  return (
    <ErrorBoundry>
      <Page setSettings={setSettings} />;
      {settings && <VerticalPanel {...settings} setSettings={setSettings} />}
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
