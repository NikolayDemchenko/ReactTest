import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../../../AppFunction";
import PageCRUDbtn from "../PageCRUDbtn";

function AppList() {
  // const [appList, setAppList] = useState([]);
  const { state,RESTManager } = useContext(Context);

  const appList = state && state.appList ? state.appList : [];

  const createNewPage = (name,appName) => {    
    RESTManager.createPage({
      appName,
      name,
      styles: [],
      nodes: [],
      bodyStyle: { background: "inherit" },
    });

  };


  useEffect(() => {
    RESTManager.getApps();
    return () => {};
  }, []);

  return appList.map((app, index) => {
    let background = "rgba(30,40,57,.8)";
    let showButtons = false;
 
    if (state.appName && state.appName === app) {
      background = "rgba(30,60,97,1)";
      showButtons = true;
    }
    return (
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #55667766",
          background,
          cursor: "default",
          // outline: "1px solid white",
        }}
        key={index}
        onClick={() => RESTManager.getPagesByAppName(app)}
      >
        {app}
        {showButtons && (
          <div
            style={{
              //  outline: "1px solid white",
              margin: "0 4px 4px auto",
            }}
          >
            <PageCRUDbtn
              {...{
                create:(name) => createNewPage(name,app),
                remove: () => {},
              }}
            />
          </div>
        )}
      </div>
    );
  });
}
export default AppList;
