import React, { useState, useEffect } from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/Page";
import VerticalPanel from "./Components/ControlPanel/VerticalPanel/VerticalPanel";
const App = () => {
  const [settings, setSettings] = useState();
  // console.log("App");
  
  // settings&&console.log('settings.preview.style.backgroundColor :>> ', settings.preview.style.backgroundColor);

// const setStyleSettings=(style)=>{
//   settings.preview.style=style
//   setSettings({...settings})
// }
  // settings&&console.log('settings', settings)


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
      {settings && <VerticalPanel {...settings} 
      // setSettings={setSettings} setStyleSettings={setStyleSettings}
      />}
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
