import React, { useState } from "react";
import InputSwitch from "./PopoverInput/InputSwitch";
export default function Style({ style, setStyle }) {
  if (style) {
    const settings = [];
    for (let key in style) {
      settings.push({ [key]: style[key] });
    }
    return settings.map(el => {
      // console.log("el", el);

      return (
        <div>
          <div
            key={settings.indexOf(el)}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", width: "200px" }}>
              <div>{Object.keys(el)[0]}:</div>
              <div style={{ margin: "0 0 0 auto" }}>
                <InputSwitch
                  value={Object.values(el)[0]}
                  setValue={value => {
                    setStyle({ ...style, ...{ [Object.keys(el)[0]]: value } });
                  }}
                />
              </div>
            </div>
            <button style={{ margin: "0 0 2px auto" }}>X</button>
          </div>             
        </div>
      );
    });
  }
}
