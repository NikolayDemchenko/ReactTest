import React from "react";

export default ({ activeBtn, inactiveBtn, on_off }) => {
  return <div>{on_off === true ? activeBtn : on_off === false ? inactiveBtn:null}</div>;
};
