import React from "react";
import TagChildrens from "./TagChildrens";
import jss from "jss";
import preset from "jss-preset-default";

function TagComponent(props) {

  const { tag, index } = props;

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: tag.style,
    })
    .attach();
 
  console.log("1-TagComponent");
  return (
    <tag.type key={index} className={classes.style}>
      {tag.childrens && tag.childrens.length > 0 && <TagChildrens {...props} />}
    </tag.type>
  );
}
export default TagComponent;
