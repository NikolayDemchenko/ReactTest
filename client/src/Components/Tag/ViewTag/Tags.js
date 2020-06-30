import React from "react";
import Tag from "./Tag";

export default function Tags({ tags }) {
  return tags.map((tag, index) => {
    return <Tag key={index} tag={tag} />;
  });
}