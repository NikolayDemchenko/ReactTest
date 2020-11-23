import axios from "axios";
export const GetPageManager = (page, setPage) => ({
  
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

  createPage: (name) => {
    name && name !== ""
      ? axios({
          method: "post",
          url: "http://localhost:8000/createPage",
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
        setPage({...response.data});
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
