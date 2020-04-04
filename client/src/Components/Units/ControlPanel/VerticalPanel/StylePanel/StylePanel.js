import React from "react";
import Styles from "./Styles";
export default function StylePanel({ controlPanel, setControlPanel }) {
  const { style } = controlPanel.unit.tagProps;

  const { unit, setUnit } = controlPanel;
  const setStyle = style => {
    setUnit({ ...unit, tagProps: { ...unit.tagProps, style } });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tagProps: { ...unit.tagProps, style } }
    });
  };
  const newStyle = () => {
    setStyle({ ...style, [inputName.value]: inputValue.value });
    inputName.value = "";
    inputValue.value = "";
  };
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      newStyle();
    }
  };

  let inputName;
  let inputValue;

  return (
    <div
      style={{
        borderTop: "6px solid #152535cc",
        // borderBottom: "4px solid #456",       
        background: "rgba(30,40,57,.8)"
      }}
    >
      Стили
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <input
          onKeyPress={handleKeyPress}
          ref={n => (inputName = n)}
          style={{
            outline: "none",
            border: "1px solid #abc",
            backgroundColor: "inherit",
            color: "#eee",
            width: "140px"
          }}
        ></input>
        <input
          ref={n => (inputValue = n)}
          style={{
            outline: "none",
            border: "1px solid #abc",
            backgroundColor: "inherit",
            width: "90px",
            margin: "0 0 0 auto",
            color: "#eee"
          }}
          onKeyPress={handleKeyPress}
        ></input>
        <div
          style={{ cursor: "pointer", color: "#ddd", width: "20px" }}
          onClick={newStyle}
        >
          +
        </div>
      </div>
      <Styles style={style} setStyle={setStyle} />
    </div>
  );
}
