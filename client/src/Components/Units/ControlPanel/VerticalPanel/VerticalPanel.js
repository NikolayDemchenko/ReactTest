import React,{useState} from "react";
import StylePanel from "./StylePanel/StylePanel";
import Select from "../ModalWindows/Select";
import { cssTags } from "../../Class/HtmlCss";
export default function VerticalPanel(props) {
  // console.log("---VerticalPanel---");
  const { controlPanel, setControlPanel, setPreview } = props;
  const { setUnit, unit } = controlPanel;
  const [selected, setSelected] = useState("All style");
  const setTag = ({ value: tag }) => {
    setUnit({ ...unit, tag });
    setPreview({ ...unit, tag });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tag },
    });
    console.log("tag", tag);
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
        boxShadow: "2px 15px 10px 2px #00000055",
      }}
      // onClick={() =>
      //   console.log("div", getComputedStyle(div, null).flexDirection)
      // }
    >
      <div
        style={{
          backgroundColor: "#456a",
        }}
      >
        <Select defaultItem={unit.tag} setItem={setTag} listItems={cssTags} />
      </div>
      <StylePanel {...props} selected={selected} setSelected={setSelected} />
    </div>
  );
}
