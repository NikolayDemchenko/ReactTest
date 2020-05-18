import React from "react";
import TagChildrens from "./TagChildrens";
import jss from "jss";
import preset from "jss-preset-default";

function TagComponent(props) {

  const { tag, preview,} = props;
  const view = preview ? preview : tag;
  const { style } = view;

  // console.log("tag.style", tag.style);

  jss.setup(preset());
  const { classes } = jss
    .createStyleSheet({
      style,
    })
    .attach();  
  
  console.log("2-TagComponent")
  return ( 
      <view.type
        className={classes.style}
        onClick={(e) => {
          // console.log("Клик e.target",e.target);   
          // console.log("Клик e.currentTarget",e.currentTarget);   
          e.target!=e.currentTarget&&e.stopPropagation()
        }}
      >
        <TagChildrens {...props} />
      </view.type>  
  );
}
function areEqual(prevProps, nextProps) {
  return prevProps.tag===nextProps.tag&&prevProps.preview===nextProps.preview?true:false
   }
 export default React.memo(TagComponent,areEqual);