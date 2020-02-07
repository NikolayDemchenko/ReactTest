import React from "react";
export const StateButton = ({ Component, state, style, onClick }) => {
  switch (state) {
    case "active":
      // console.log(style.active);
      return <Component onClick={onClick} style={style.active} />;
    case "inactive":
      return <Component style={style.inactive} />;
    case "on":
      return <Component onClick={onClick} style={style.on} />;
    default:
      return null;
  }
};
export const OldState = ({ active, inactive, state }) =>
  state === true ? active : state === false ? inactive : null;
