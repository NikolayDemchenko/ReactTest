import React, { useState } from "react";
import ReactDOM from "react-dom";
export default function SelectPanel(props) {
  const { setItem, changeItem, item, items, close } = props;
  const [value, setValue] = useState(item);
  // console.log("items :>> ", items);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // console.log("handleKeyPress");
      handleClick(value);
    }
  };
  const handleClick = (item) => {
    setValue(item);
    setItem(item);
    close(null);
    // console.log("handleClick", item);
  };
  const handleChange = ({ target: { value } }) => {
    setValue(value);
    changeItem(value);
    // console.log("handleChange", value);
  };

  return (
    <div
      onKeyPress={handleKeyPress}
      style={{ maxHeight: "90vh", background: "#3459" }}
    >
      <input
        ref={(comp) => comp && ReactDOM.findDOMNode(comp).focus()}
        value={value}
        onChange={handleChange}
        style={{
          background: "rgba(30,40,57,.9)",
          color: "inherit",
          fontSize: "16px",
          padding: "0 8px",
          // width: "90%",
          outline: "none",
          border: 0,
        }}
      />
      <div
        onKeyPress={handleKeyPress}
        style={{ maxHeight: "90vh", overflowY: "auto", background: "#3459" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onMouseDown={() => setValue(item)}
            onClick={() => handleClick(item)}
            style={{
              background: "rgba(30,40,57,.9)",
              padding: "0 8px",
              margin: "2px 0 0",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
