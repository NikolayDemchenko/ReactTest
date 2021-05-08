import { JssStyle } from 'jss';

import { createStyleSheet } from '../../CreateJssStyle';

const objectStyle: JssStyle = {
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  marginLeft: "10px",
  "&:hover": { background: "#567" },
};

export const styleSheet = createStyleSheet({ objectStyle });
