import axios from "axios";
export const GetRESTManager = (page, setPage, setSettings) => ({
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
        setSettings((settings) => ({
          ...settings,
          pageList: response.data.pages,
          appName,
        }));
        setPage(response.data.startPage);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  saveAsPage: (name) => {
    console.log("saveAsPage");
    name && name !== ""
      ? axios({
          method: "post",
          url: "http://localhost:8000/saveAsPage",
          data: { page: JSON.stringify({ ...page, name }) },
        })
          .then((response) => {
            console.log("response.data!", response.data);
            setPage({ ...response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      : alert("string empty!");
  },
  createApp: (page) => {
    console.log("createApp");
    axios({
      method: "post",
      url: "http://localhost:8000/createApp",
      data: { page: JSON.stringify(page) },
    })
      .then((response) => {
        console.log("response.data!", response.data);
        setPage({ ...response.data });
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
});
