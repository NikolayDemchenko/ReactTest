import React,{useState} from "react";
import ErrorBoundry from "./ErrorBoundry";
import "./App.css";
import Page from "./Components/Page";
import VerticalPanel from "./Components/ControlPanel/VerticalPanel/VerticalPanel";
const App = () => {
  const [settings, setSettings] = useState();

  return (
    <ErrorBoundry>
      <Page setSettings={setSettings} />;
      {settings&&<VerticalPanel {...settings}/>}
    </ErrorBoundry>
  );
};
export default App;
