import React from "react";
import Tag from "./Tag";

export default function Tags(props) {
  return props.tags.map((tag, key) => {
    return <Tag {...{ ...props, tag, key }} />;
  });
}