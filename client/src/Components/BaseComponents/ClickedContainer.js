import React from "react";
export default ({ Component, onClick, style }) => {
  return (
    <div onClick={onClick} style={style}>
      {Component}
    </div>
  );
};
