import React from "react";
import Tags from "./Tags";
import log from "../../../../../Log";
// import jss from "jss";
// import preset from "jss-preset-default";
function Tag(props) {
  const { tag, tagsForRender, className } = props;

  const onClick = (e) => {
    tag.onClick && tag.onClick(e);
  };

  return (
    <tag.type id={tag.id} className={className} onClick={onClick}>
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
  // console.log("prevProps.tagsForRender", prevProps.tagsForRender);
  // console.log("nextProps.tagsForRender", nextProps.tagsForRender);

  return nextProps.tagsForRender
    ? nextProps.tagsForRender.find((id) => id === nextProps.tag.id)
      ? false
      : true
    : false;
}
// export default Element;
export default React.memo(log(Tag), areEqual);
