import jss from "jss";
import preset from "jss-preset-default";
jss.setup(preset());
const { classes } = jss
  .createStyleSheet({
    style: {
      cursor: "pointer",
      width: "16px",
      margin: "0px 5px ",
      // border: "1px solid #fff",
      "&:hover": {
        // outline:"#cef solid 1px",
        transform: "perspective(200px) scaleZ(-10) translateZ(-2px)",
      },
      "&:active": { color: "#ffa" },
    },
  })
  .attach();

export const buttonStyle = classes.style;
