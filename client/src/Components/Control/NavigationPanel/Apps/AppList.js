import React, { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../../../AppFunction";

function AppList() {
  // const [appList, setAppList] = useState([]);
  const { settings, setSettings, setPage } = useContext(Context);

  const appList = settings && settings.appList ? settings.appList : [];

  const setAppList = (appList) => {
    setSettings((settings) => ({ ...settings, appList }));
  };
  const setPageList = (appName, pageList) => {
    setSettings((settings) => ({ ...settings, pageList, appName }));
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
  const getPagesByAppName = (appName) => {
    console.log("getPagesByAppName")
    axios({
      method: "get",
      url: "http://localhost:8000/getPagesByAppName",
      params: {
        appName,
      },
    })
      .then((response) => {
        // console.log("response.data!", response.data);
        setPageList(appName, response.data.pages);
        setPage(response.data.startPage);
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
        onClick={() => getPagesByAppName(app)}
      >
        {app}
      </div>
    );
  });
}
export default AppList;
