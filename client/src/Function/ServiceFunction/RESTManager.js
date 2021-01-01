import axios from "axios";
export const GetRESTManager = (page, setPage, setSettings) => ({
  getApps: () => {
    console.log("getApps");
    axios({
      method: "get",
      url: "http://localhost:8000/getApps",
    })
      .then((response) => {
        setSettings((settings) => ({ ...settings, appList: response.data }));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getPages: () => {
    axios({
      method: "get",
      url: "http://localhost:8000/getPages",
    })
      .then((response) => {
        console.log("response.data!", response.data);
        setPage(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getPagesByAppName: (appName) => {
    console.log("getPagesByAppName");
    axios({
      method: "get",
      url: "http://localhost:8000/getPagesByAppName",
      params: {
        appName,
      },
    })
      .then((response) => {
        console.log("response.data.pages", response.data.pages);
        setSettings((settings) => ({
          pageList: response.data.pages,
          appList: settings.appList,
          appName,
        }));
        setPage(response.data.startPage);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  createPage: (page) => {
    console.log("createPage");
    axios({
      method: "post",
      url: "http://localhost:8000/createPage",
      data: { page: JSON.stringify(page) },
    })
      .then((response) => {
        console.log("response.data!", response.data);
        setPage({ ...response.data });
        setSettings((settings) => ({
          ...settings,
          pageList: [...settings.pageList, response.data],
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  updatePage: () => {
    console.log("save");
    axios({
      method: "post",
      url: "http://localhost:8000/updatePage",
      data: { page: JSON.stringify(page) },
    })
      .then((response) => {
        console.log(response.data);
        setPage({ ...response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  getPageById: (_id) => {
    console.log("getPageById");
    axios({
      method: "get",
      url: "http://localhost:8000/getPageById",
      params: {
        _id,
      },
    })
      .then((response) => {
        // console.log("response.data!", response.data);
        setPage(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  removePageById: (_id) => {
    console.log("removePageById");
    axios({
      method: "post",
      url: "http://localhost:8000/removePageById",
      params: {
        _id,
      },
    })
      .then(() => {
        setSettings((settings) => ({
          ...settings,
          pageList: [...settings.pageList.filter((page) => page._id !== _id)],
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
});
