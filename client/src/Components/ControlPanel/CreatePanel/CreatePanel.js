import React, { useState, useEffect } from "react";
import PopupTagList from './PopupTagList'
export default function CreatePanel(props) { 

  return (
    <div
      style={{
        display: "flex",
        color: "rgba(140, 200, 255, 0.8)",
        // width: "200px",
      }}
    >
    type: <PopupTagList
        tag={props.tag.type}
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
