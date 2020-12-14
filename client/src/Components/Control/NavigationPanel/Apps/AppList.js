import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../../../AppFunction";
import CRUDbtn from "../CRUDbtn";
function AppList() {
  // const [appList, setAppList] = useState([]);
  const { settings, setSettings, RESTManager } = useContext(Context);

  const appList = settings && settings.appList ? settings.appList : [];

  const setAppList = (appList) => {
    setSettings((settings) => ({ ...settings, appList }));
  };
  const createNewPage = (appName) => {
    const newPage = {
      appName,
      name: "new_page",
      styles: [],
      tags: [],
      bodyStyle: { background: "inherit" },
    };
    setSettings((settings) => ({
      ...settings,
      pageList: [ ...settings.pageList, newPage ],
    }));
  };
  const getApps = (set) => {
    console.log("getApps");
    axios({
      method: "get",
      url: "http://localhost:8000/getApps",
    })
      .then((response) => {
        // console.log("response.data!", response.data);
        set(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getApps(setAppList);
    return () => {};
  }, []);

  return appList.map((app, index) => {
    let background = "rgba(30,40,57,.8)";
    let showButtons = false;
    // console.log(
    //   "settings.pageList[0]",
    //   settings.pageList && settings.pageList[0],
    //   app
    // );
    if (settings.appName && settings.appName === app) {
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
            <CRUDbtn
              {...{
                create:() => createNewPage(app),
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
