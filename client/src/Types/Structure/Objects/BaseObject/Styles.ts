import { createStyleSheet } from '../../CreateJssStyle';

export const styleSheet = createStyleSheet({ objectStyle:{
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  marginLeft: "10px",
  "&:hover": { background: "#567" } }});
