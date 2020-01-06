import React from "react";
export default ({ Component, ClickHandler, style }) => {
  return (
    <div onClick={ClickHandler} style={style}>
      {Component}
    </div>
  );
};
