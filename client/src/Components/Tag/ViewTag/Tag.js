import React from "react";
import Tags from "./Tags";
import jss from "jss";
import preset from "jss-preset-default";

export default function Tag(props) {
  const { id, index, style,childrens } = props.tag;

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style
    })
    .attach();

  const onClick = (e) => {
    // console.log("edit", tag.id);
  };

  return (
    <props.tag.type
      id={id}
      key={index}
      className={classes.style}
      onClick={onClick}
    >
      {childrens && childrens.length > 0 ? (
        <Tags {...props} tags={childrens} />
      ) : null}
    </props.tag.type>
  );
}