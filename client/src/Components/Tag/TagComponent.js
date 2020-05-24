import React from "react";
import TagChildrens from "./TagChildrens";
import jss from "jss";
import preset from "jss-preset-default";

function TagComponent(props) {
  const { tag, index } = props;
  // console.log('tag', tag)
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: tag.style,
    })
    .attach();
  // console.log("index", index);
  console.log("-TagComponent");
  return (
    <tag.type key={index} className={classes.style}>
      {tag.childrens && tag.childrens.length > 0 && <TagChildrens {...props} />}
    </tag.type>
  );
}
function areEqual(prevProps, nextProps) {
  // console.log('prevProps.tag.type', prevProps.tag.type)
  // console.log('nextProps.tag.type', nextProps.tag.type)
  return prevProps.tag === nextProps.tag ? true : false;
  // return prevProps === nextProps? true : false;
}
export default React.memo(TagComponent,areEqual);
// export default TagComponent;
