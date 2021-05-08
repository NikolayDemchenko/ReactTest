import { JssStyle } from 'jss';

import { createStyleSheet } from '../../CreateJssStyle';

const propertyStyle: JssStyle = {
    display: "flex",
    cursor: "pointer",
    marginLeft: "10px",
    "&:hover": { color: "#fff" },
  },
  keyStyle: JssStyle = {
    cursor: "pointer",
    marginLeft: "10px",
    color: "red",
    "&:hover": { color: "#fff" },
  },
  valueStyle: JssStyle = {
    cursor: "pointer",
    marginLeft: "10px",
    color: "blue",
    "&:hover": { color: "#fff" },
  };

export const styleSheet= createStyleSheet({ 
  propertyStyle,
  keyStyle,
  valueStyle,
});
