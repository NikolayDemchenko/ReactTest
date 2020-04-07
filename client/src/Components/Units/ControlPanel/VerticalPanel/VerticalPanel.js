import React from "react";
import StylePanel from "./StylePanel/MainPanel";
import Select from "../ModalWindows/Select";
import { cssTags } from "../../Class/HtmlCss";
export default function VerticalPanel(props) {
  // console.log("---VerticalPanel---");
  const { controlPanel, setControlPanel } = props;
  const { setUnit, unit } = controlPanel;
  const { tag } = unit;

  const setTag = ({ value }) => {
    setUnit({ ...unit, tag: value });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tag: value }
    });
    console.log("tag", value);
  };


  return (
    <div     
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    
        minWidth: "280px",
        maxWidth: "280px",
        position: "fixed ",
        zIndex: 1,
        top: "70px",
        left: 0,     
        backgroundColor: "transparent",
        color: "#acdc",
        boxShadow:"2px 15px 10px 2px #00000055"
      
      }}
      // onClick={() =>
      //   console.log("div", getComputedStyle(div, null).flexDirection)
      // }
    ><div  style={{     
      backgroundColor: "#456a"    
    }}>
      <Select defaultItem={tag} setItem={setTag} listItems={cssTags} />
    </div>
      <StylePanel {...props} />
    </div>
  );
}
