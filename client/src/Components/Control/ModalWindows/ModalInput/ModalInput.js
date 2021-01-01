import React from "react";
import ReactDOM from "react-dom";
import Popover from "../Popover";
import { check } from "react-icons-kit/iconic/check";
import Icon from "react-icons-kit";

export default function ModalInput(props) {
  const Input = ({ setItem, close }) => {
  

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        // console.log("handleKeyPress");
        handleClick(e.target.value);
      }
    };
    const handleClick = (item) => {
      setItem(item);
      close();
      // console.log("handleClick", item);
    };
    let input;
    return (
      <div style={{ display: "flex", background: "#3459" }}>
        <input
          onKeyPress={handleKeyPress}
          ref={(comp) =>
            comp && (input = comp) && ReactDOM.findDOMNode(comp).focus()
          }
          style={{
            background: "rgba(30,40,57,.9)",
            color: "#fff",
            fontSize: "16px",
            padding: "0 8px",
            // width: "90%",
            outline: "none",
            border: 0,
          }}
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
            console.log('input.value', input.value)
            handleClick(input.value)
          }}
          style={{ margin: "0 0.2em", cursor: "pointer", width: "0.8em" }}
        >
          <Icon size={"100%"} icon={check} />
        </div>
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
      <Input {...props} />
    </Popover>
  );
}
