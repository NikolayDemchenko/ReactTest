import jss from "jss";
import preset from "jss-preset-default";
const btnStyle = {
  cursor: "pointer",
  width: "16px",
  margin: "0px 5px ",
  // border: "1px solid #fff",
};
const btnHoverStyle = {
  // outline:"#cef solid 1px"
  transform: "perspective(200px) scaleZ(-20) translateZ(-2px)",
};
const btnActivStyle = {
  color: "#ffa",
};
jss.setup(preset());
const { classes } = jss
  .createStyleSheet({
    style: {
      ...btnStyle,
      "&:hover": { ...btnHoverStyle },
      "&:active": { ...btnActivStyle },
    },
  })
  .attach();

  export const buttonStyle=classes.style