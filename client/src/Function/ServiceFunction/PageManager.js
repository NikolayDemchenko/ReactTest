import axios from "axios";
export const PageManager = (page, setPage) => ({
  saveNewPage: (name) => {
    name && name !== ""
      ? axios({
          method: "post",
          url: "http://localhost:8000/addpage",
          data: { page: JSON.stringify({ ...page, name }) },
        })
          .then((response) => {
            console.log("response.data!",response.data);
            setPage({ ...response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      : alert("string empty!");
  },
  savePage: () => {
    console.log("save");
    axios({
      method: "post",
      url: "http://localhost:8000/updatepage",
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
