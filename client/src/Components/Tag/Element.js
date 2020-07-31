import React from "react";
import Tags from "./Tags";
import log from "../../Log";
// import jss from "jss";
// import preset from "jss-preset-default";
function Element(props) {
  const { tag, tagsForRender, classes } = props;

  console.log('classes', classes[tag.styleId])
  //   jss.setup(preset());

  //   const myStyles={};
  //   props.page.styles.forEach(({id,style}) => {
  //     // console.log('element :>> ', element);
  //     myStyles[id]=style
  //   });
  // console.log('myStyles :>> ', myStyles);
  //   const {classes} = jss
  //     .createStyleSheet({
  //       ...myStyles
  //       // [tag.styleId]: tag.style,
  //       // // style2: tag.style,
  //     })
  //     .attach();

  // console.log('classes :>> ', classes);

  const onClick = (e) => {
    tag.onClick && tag.onClick(e);
  };

  return (
    <tag.type id={tag.id} className={classes[tag.styleId]} onClick={onClick}>
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
export default React.memo(log(Element), areEqual);
