import React from "react";
import Tags from "./Tags";
import jss from "jss";
import preset from "jss-preset-default";
function Element(props) {
  const { tag, index, edit } = props;

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: tag.style,
    })
    .attach();
  const onClick = () => {
    if (edit) {
      console.log("edit");
    } else {
      console.log("function");
    }
  };

  let element = (
    <tag.type
      id={tag.id}
      key={index}
      className={classes.style}
      onClick={onClick}
    >
      {tag.childrens && tag.childrens.length > 0 ? (
        <Tags {...props} tags={tag.childrens} />
      ) : null}
    </tag.type>
  );
  return element ;
}
export default Element;