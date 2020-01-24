import React from "react";

export default ({ activeBtn, inactiveBtn, on_off }) => {
  return <div>{on_off === true ? activeBtn : inactiveBtn}</div>;
};
