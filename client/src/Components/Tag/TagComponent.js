import React from "react";
import Tags from "./Tags";
import jss from "jss";
import preset from "jss-preset-default";
import { v4 as uuidv4 } from "uuid";
function TagComponent(props) {
  // console.log("TagComponent-Tag",uuidv4());
  const { tag, index } = props;
  // console.log('tag.childrens', tag.childrens)
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: tag.style,
    })
    .attach();

  // console.log("1-TagComponent");
  return (
    <tag.type key={index} className={classes.style}>
      {tag.childrens && tag.childrens.length > 0 && (
        <Tags {...props} tags={tag.childrens} />
      )}
    </tag.type>
  );
}

function areEqual(prevProps, nextProps) {
  return prevProps.tag === nextProps.tag ? true : false;
}
export default React.memo(TagComponent, areEqual);
// export default TagComponent;
