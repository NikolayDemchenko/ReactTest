import React, { useState, useContext } from "react";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import Icon from "react-icons-kit";
import axios from "axios";
import { Context } from "../../../../AppFunction";
import CRUDTag from "../Tags/CRUDTag";

function NavPage({ page }) {
  const context = useContext(Context);
  const { setPage, createTag, removeTag } = context;

  // console.log("context.page", context.page);
  // console.log("page", page);

  const getPageById = (_id) => {
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
  };

  const [showChilds, setshowChilds] = useState(false);
  const _icon = <Icon size={"100%"} icon={ic_keyboard_arrow_right} />;

  const icon = !showChilds ? (
    <div>{_icon}</div>
  ) : (
    <div style={{ transform: "rotate(90deg)" }}>{_icon}</div>
  );
  // console.log('childrens', childrens)
  // const toggle =
  //   childrens.length > 0 ? (
  //     <div
  //       style={{ cursor: "pointer", width: "20px" }}
  //       onClick={(e) => {
  //         e.stopPropagation();
  //         setshowChilds(!showChilds);
  //       }}
  //     >
  //       {icon}
  //     </div>
  //   ) : null;

  let background = "rgba(30,40,57,.8)";
  let showButtons = false;

  if (context.page && context.page._id === page._id) {
    background = "rgba(30,60,97,1)";
    showButtons = true;
  }

  return (
    <div
      onClick={(e) => {
        console.log("onClick");
        e.preventDefault();
        context.page._id !== page._id&&getPageById(page._id);
        // console.log("id :>> ", id);
      }}
      style={{
        display: "flex",
        borderBottom: "2px solid #55667766",
        background,
        cursor: "default",
        // outline: "1px solid white",
      }}
    >
      {/* {toggle} */}
      {page.name}
      {showButtons && (
        <div
          style={{
            //  outline: "1px solid white",
            margin: "0 4px 4px auto",
          }}
        >
          <CRUDTag {...{ createTag, removeTag }} />
        </div>
      )}
    </div>
  );
}
// export default React.memo(NavTag);
export default NavPage;
