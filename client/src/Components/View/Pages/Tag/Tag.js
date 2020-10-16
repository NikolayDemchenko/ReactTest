import React from "react";
import Tags from "./Tags";
import log from "../../../../Log";
// import jss from "jss";
// import preset from "jss-preset-default";
function Tag(props) {
  const { tag, className } = props;

  const onClick = (e) => {
    // tag.onClick && tag.onClick(e);
  };

  return (
    <tag.type id={tag.id} className={className} onClick={onClick}>
      {/* {tag.id} */}
      {tag.childrens && tag.childrens.length > 0 ? (
        <Tags
          {...props}
          tags={tag.childrens}     
        />
      ) : null}
    </tag.type>
  );
}

// function areEqual(prevProps, nextProps) {
// }
// export default React.memo(log(Tag), areEqual);
export default React.memo(log(Tag))
