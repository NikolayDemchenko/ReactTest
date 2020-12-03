import React from "react";
import Tags from "./Tags";
import log from "../../../../Log";
function Tag(props) {
  const { tag, onClick } = props;

  const click = (e) => {
    // console.log('tag :>> ', tag);
    // console.log("e.target.id", e.target.id);
    e.stopPropagation();
    onClick(tag);
  };

  return (
    <tag.type id={tag.id} className={tag.className} onClick={click}>
      {tag.childrens && tag.childrens.length > 0 ? (
        <Tags {...props} tagTree={tag.childrens} />
      ) : null}
    </tag.type>
  );
}

// function areEqual(prevProps, nextProps) {
// }
// export default React.memo(log(Tag), areEqual);
export default React.memo(log(Tag));
