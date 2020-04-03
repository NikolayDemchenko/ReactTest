import React, { useState } from "react";
import InputSwitch from "./PopoverInput/InputSwitch";
export default function Style({ style, setStyle }) {

  const deleteProperty=(prop,style)=>{
    delete style[prop]
    setStyle(style);
  }
  if (style) {
    const settings = [];
    for (let key in style) {
      settings.push({ [key]: style[key] });
    }
    return settings.map(el => {
      // console.log("el", el);
      return (
        <div
          key={settings.indexOf(el)}
          style={{ display: "flex", flexWrap: "wrap",borderBottom:".5px solid #345" }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", width: "250px" }}>
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
          <div style={{cursor:"pointer", margin: "0 0 2px auto" }} onClick={()=>deleteProperty(Object.keys(el)[0],style)}>X</div>
        </div>
      );
    });
  }
}