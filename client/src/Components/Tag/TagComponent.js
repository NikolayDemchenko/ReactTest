import React from "react";
import TagChildrens from "./TagChildrens";
import jss from "jss";
import preset from "jss-preset-default";

function TagComponent(props) {
  const { tag } = props;

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: tag.style,
    })
    .attach();

  // console.log("2-TagComponent");
  return (
    <tag.type className={classes.style}>
      {tag.childrens && tag.childrens.length > 0 && <TagChildrens {...props} />}
    </tag.type>
  );
}
function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag
    ? true
    : false;
}
export default React.memo(TagComponent, areEqual);
// export default TagComponent;
