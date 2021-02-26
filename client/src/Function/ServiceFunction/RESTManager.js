import axios from "axios";
const clog = true;
const url = "http://localhost:8000/";

const get = async (requestName, params) => {
  clog && console.log("getApps");
  try {
    const { data } = await axios({
      method: "get",
      url: `${url}${requestName}`,
      params,
    });
    return await data;
  } catch (e) {
    console.error(e);
  }
};

export const GetRESTManager = (setState) => {
  return {
    getApps: () => get("getApps"),
    getPageById: (_id) => get("getPageById",  {_id} ),
  
    getPagesByAppName: async (appName) => {
      clog && console.log("getPagesByAppName");
      try {
        const { data } = await axios({
          method: "get",
          url: "http://localhost:8000/getPagesByAppName",
          params: {
            appName,
          },
        });
        return await data;
      } catch (e) {
        console.error(e);
      }
    },
    updateAppName: async (appName) => {
      clog && console.log("getApps");
      try {
        const { data } = await axios({
          method: "post",
          url: "http://localhost:8000/updateAppName",
          data: { appName: JSON.stringify(appName) },
        });
        return await data;
      } catch (e) {
        console.error(e);
      }
    },
    createPage: async (page) => {
      try {
        const { data } = await axios({
          method: "post",
          url: "http://localhost:8000/createPage",
          data: { page: JSON.stringify(page) },
        });
        return await data;
      } catch (e) {
        console.error(e);
      }
    },
    updatePage: async (page) => {
      clog && console.log("updatePage");
      try {
        const { data } = await axios({
          method: "post",
          url: "http://localhost:8000/updatePage",
          data: { page: JSON.stringify(page) },
        });
        return await data;
      } catch (e) {
        console.error(e);
      }
    },

    removePageById: (_id) => {
      clog && console.log("removePageById");
      axios({
        method: "post",
        url: "http://localhost:8000/removePageById",
        params: {
          _id,
        },
      })
        .then(() => {
          setState((state) => {
            return {
              ...state,
              pageList: [...state.pageList.filter((page) => page._id !== _id)],
            };
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  };
};
