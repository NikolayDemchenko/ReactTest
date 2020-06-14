import React, { useState, useEffect } from "react";
import htmlTags from "html-tags";
import { htmlTags as startHtmlTags } from "../../Class/HtmlCss";
import SelectPanel from "../SelectPanel";
export default function CreatePanel(props) {
  return (
    <div
      style={{
        display: "flex",
        color: "rgba(140, 200, 255, 0.8)",
        // width: "200px",
      }}
    >
      type:{" "}
      <SelectPanel
        items={startHtmlTags.map((item) => item.value)}
        allItems={htmlTags}
        selectedItem={props.tag.type}
      />
      <div
        style={{
          backgroundColor: "#234c",
          // width: "100px",
        }}
      ></div>
    </div>
  );
}
