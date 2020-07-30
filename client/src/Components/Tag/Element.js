import React from "react";
import Tags from "./Tags";
import log from "../../Log";
import jss from "jss";
import preset from "jss-preset-default";
function Element(props) {
  const { tag, tagsForRender } = props;
// console.log('tagsForRender', tagsForRender)
  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style: tag.style,
    })
    .attach();

  const onClick = (e) => {
    // e.stopPropagation();
    props.onClick && props.onClick();
  };

  return (
    <tag.type
      id={tag.id}   
      className={classes.style}
      onClick={onClick}
    >
      {/* {tag.id} */}
      {tag.childrens && tag.childrens.length > 0 ? (
        <Tags
          {...props}
          tags={tag.childrens}
          tagsForRender={
            tagsForRender && [...tagsForRender.filter((id) => id != tag.id)]
          }
        />
      ) : null}
    </tag.type>
  );
}
function areEqual(prevProps, nextProps) {
  console.log("prevProps.tagsForRender", prevProps.tagsForRender);
  console.log("nextProps.tagsForRender", nextProps.tagsForRender);

  return nextProps.tagsForRender
    ? nextProps.tagsForRender.find((id) => id === nextProps.tag.id)
      ? false
      : true
    : false;
}
// export default Element;
export default React.memo(log(Element), areEqual);
