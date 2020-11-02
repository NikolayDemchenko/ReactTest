import React from "react";
import Tags from "./Tags";
import log from "../../../../Log";
function Tag(props) {
  const { tag, className, setClickedId } = props;

  const onClick = (e) => {
    // console.log("e.target.id", e.target.id);
    e.stopPropagation();
    setClickedId(tag.id);
  };

  return (
    <tag.type id={tag.id} className={className} onClick={onClick}>
      {tag.childrens && tag.childrens.length > 0 ? (
        <Tags {...props} tags={tag.childrens} />
      ) : null}
    </tag.type>
  );
}

// function areEqual(prevProps, nextProps) {
// }
// export default React.memo(log(Tag), areEqual);
export default React.memo(log(Tag));
