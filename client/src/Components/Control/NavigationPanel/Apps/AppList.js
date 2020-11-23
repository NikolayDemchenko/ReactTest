import React, { useState, useEffect } from "react";
import axios from "axios";
function AppList(props) {
  const [appList, setAppList] = useState([]);
  const getApps = (set) => {
    axios({
      method: "get",
      url: "http://localhost:8000/getApps",
    })
      .then((response) => {
        console.log("response.data!", response.data);
        set(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getPagesByAppName = (appName) => {
    axios({
      method: "get",
      url: "http://localhost:8000/getPagesByAppName",
      params: {
        appName
      }
    })
      .then((response) => {
        console.log("response.data!", response.data);
        // setPageList(response.data.pageNames)
        props.setPage(response.data.startPage);
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
    return (
      <div key={index} onClick={() => getPagesByAppName(app)}>
        {app}
      </div>
    );
  });
}
export default AppList;
