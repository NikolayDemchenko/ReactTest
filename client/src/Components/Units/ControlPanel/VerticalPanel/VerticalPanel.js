import React from "react";
import StylePanel from "./StylePanel/StylePanel";
import Select from "../ModalWindows/Select";
import { cssTags } from "../../Class/Css";
export default function VerticalPanel(props) {
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
        color: "#acd",
        boxShadow:"0 5px 15px 1px #00000099"
      
      }}
      // onClick={() =>
      //   console.log("div", getComputedStyle(div, null).flexDirection)
      // }
    >
      <Select defaultItem={tag} setItem={setTag} listItems={cssTags} />
      <StylePanel {...props} />
    </div>
  );
}
