import React from "react";
export const StateButton = ({ Component, color, onClick }) => {
  return <Component onClick={onClick} color={color} />;
};

export const OldState = ({ active, inactive, state }) =>
  state === true ? active : state === false ? inactive : null;
