import axios from "axios";
const clog = true;
export const GetRESTManager = (setState) => {
  return {
    getApps: async () => {
      clog && console.log("getApps");
      try {
        const { data } = await axios({
          method: "get",
          url: "http://localhost:8000/getApps",
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
    // getPages: () => {
    // 	axios({
    // 		method: 'get',
    // 		url: 'http://localhost:8000/getPages',
    // 	})
    // 		.then((response) => {
    // 			clog && console.log('getPages', response.data);
    //
    //    setState((state) => ({ ...state, page: response.data }));
    // 		})
    // 		.catch(function (error) {
    // 			console.log(error);
    // 		});
    // },
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
      // axios({
      //   method: "post",
      //   url: "http://localhost:8000/updatePage",
      //   data: { page: JSON.stringify(page) },
      // })
      //   .then((response) => {
      //     clog && console.log(response.data);
      //     setState((state) => ({ ...state, page: response.data }));
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    },
    getPageById: async (_id) => {
      clog && console.log("getPageById");
      try {
        const { data } = await axios({
          method: "get",
          url: "http://localhost:8000/getPageById",
          params: {
            _id,
          },
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
