import React from "react";
import Tags from "./Tags";
import jss from "jss";
import preset from "jss-preset-default";
function Element(props) { 
  const { tag, index } = props;
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: tag.style,
    })
    .attach();  
  return (
    <tag.type key={index} className={classes.style}>
      {tag.childrens && tag.childrens.length > 0 ? (
        <Tags {...props} tags={tag.childrens} />
      ):null}
    </tag.type>
  );
}
export default Element;
