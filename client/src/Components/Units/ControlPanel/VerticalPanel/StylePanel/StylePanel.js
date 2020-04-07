import React from "react";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import Properties from "./Properties";
export default function StylePanel({name, style, setStyle }) {
  const newStyle = () => {
    const newName = "property";
    setStyle({ [newName]: "value", ...style });
  };

  return (
    <div
      style={{
        borderTop: "6px solid rgba(30,40,57,.4)",
      }}
    >
      <div
        style={{
          color: "#bdef",
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "0.5em",
        }}
      >        
        {name}
        <div
          style={{
            cursor: "pointer",
            color: "#9ab",
            width: "16px",
            margin: "0px 0px 5px 100px",
          }}
          onClick={newStyle}
        >
          <Icon size={"100%"} icon={plus} />
        </div>
      </div>
      <Properties style={style} setStyle={setStyle} />
    </div>
  );
}
