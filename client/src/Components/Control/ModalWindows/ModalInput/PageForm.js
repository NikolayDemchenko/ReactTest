import React, { useState } from "react";
import ReactDOM from "react-dom";
import Popover from "../Popover";
import { check } from "react-icons-kit/iconic/check";
import Icon from "react-icons-kit";

export default function PageForm(props) {
  const Input = ({ title, name }) => {
    const [value, setValue] = useState("");
    console.log("value :>> ", value);

    return (
      <div style={{ display: "flex" }}>
        <div style={{ margin: "0 0.4em " }}>{title}</div>
        <input
          id={name}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          value={value}
          style={{
            margin: "0.2em 0.2em 0 auto",
            background: "rgba(30,40,57,.9)",
            color: "#fff",
            fontSize: "16px",
            padding: "0 8px",
            outline: "none",
            border: 0,
          }}
        />
      </div>
    );
  };

  const Form = ({ setItem, close }) => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        // console.log("handleKeyPress");
        handleClick(e.target.value);
      }
    };
    const handleClick = () => {
      const domain = document.getElementById("domain").value;
      const name = document.getElementById("name").value;
      const appName = document.getElementById("appName").value;

      setItem({appName,name,domain});
      // close();
      // console.log("handleClick", item);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          background: "#3459",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();         
            handleClick();
          }}
          style={{
            margin: "0 0.6em 0 auto",
            cursor: "pointer",
            width: "0.8em",
          }}
        >
          <Icon size={"100%"} icon={check} />
        </div>
        <Input {...{ title: "domain", name: "domain" }} />
        <Input {...{ title: "page name", name: "name" }} />
        <Input {...{ title: "app name", name: "appName" }} />
      </div>
    );
  };
  return (
    <Popover
      PaperProps={{
        style: {
          borderRadius: "0",
          background: "transparent",
          // border: "1px solid #abc",
          color: "rgba(140, 200, 255, 0.8)",

          overflow: "visible",
        },
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <div style={{ cursor: "pointer" }}>{props.children}</div>
      <Form {...props} />
    </Popover>
  );
}
