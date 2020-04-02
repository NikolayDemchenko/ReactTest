import React from "react";
import PopoverInput from "./PopoverInput/PopoverInput";
export default function Style({ style, setStyle }) {
  if (style) {
    const settings = [];
    for (var key in style) {
      settings.push({ [key]: style[key] });
    }
    return settings.map(el => {
      console.log("el", el);

      let input;
      return (
        <div
          key={settings.indexOf(el)}
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          <div style={{ marginLeft: "2px" }}>{Object.keys(el)[0]}  </div>
          <PopoverInput
            value={Object.values(el)[0]}
            setValue={value =>
              setStyle({ ...style, ...{ [Object.keys(el)[0]]: value } })
            }
          />       
          <button style={{ margin: "0 0 2px auto" }}>X</button>
        </div>
      );
    });
  }
}
