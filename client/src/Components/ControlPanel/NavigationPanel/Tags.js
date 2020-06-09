import React from 'react'
import Tag from './Tag'
function Tags(props) {
    return props.tags.map((tag, index) => {
      return (
        // <div style={{ display: "flex" }} key={index}>
        <Tag
          {...props}
          key={index}
          tag={tag}
          // index={props.index + "_" + index}
        />
        // </div>
      );
    });
  }
  export default Tags