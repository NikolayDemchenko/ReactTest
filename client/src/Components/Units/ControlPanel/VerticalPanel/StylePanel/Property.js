import React, { useState } from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import PropertyInputSwitch from "./Switch/PropertyInputSwitch";
import StringInput from "../Inputs/StringInput";
import Transition from "react-transition-group/Transition";

export default function Property({
  property,
  setProperty: { setName, setValue },
  deleteProperty,
  setPreview,
  addNewPropUp,
  addNewPropDown,
  dragLeave,
}) {
  // console.log('property', property)
  const [style, setstyle] = useState({ transition: "0.5s" });
  const [Y, setY] = useState();
  const [drop, setdrop] = useState();
  const [copy, setcopy] = useState(false);

  const [prop, setProp] = useState(true);
  // console.log('style', style)
  let div;
  const DropDiv = () => (
    <div
      style={{ height: "25px" }}
      onDragLeave={(e) => {
        e.stopPropagation();
        console.log("onDragLeave");
        dragLeave();
        // setdrop();
      }}
      // onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.stopPropagation();
        console.log("onDragLeave");
        dragLeave();
        // setdrop();
      }}
    />
  );

  return Object.keys(property)[0] !== "field" ? (
    <div
      tabIndex="0"
      onKeyUp={(e) => {
        setcopy(!copy);
        console.log("e.key", e.key);
      }}
      onKeyDown={(e) => {
        setcopy(!copy);
        console.log("e.key", e.key);
      }}
    >
      <div
        draggable
        ref={(n) => (div = n)}
        style={{
          // border: "1px solid #fff",
          display: "grid",
          gridTemplateColumns: "60% 35% 1em",
          borderBottom: "2px solid #55667766",
          background: "rgba(30,40,57,.4)",
        }}
        // onDrag={(e) => {
        //   if (!copy) setProp(false);
        // }}
        onDragEnter={(e) => {
          if (Y < e.pageY) {
            console.log("Вниз");
            // setdrop("bottom");
            addNewPropDown();
          } else if (Y > e.pageY) {
            console.log("Вверх");
            // setdrop("top");
            addNewPropUp();
          }
          setY(e.pageY);
        }}
      >
        <div
          title={"CSS свойство"}
          style={{
            padding: "0px 0.5em",
            // border: "1px solid #fff",
          }}
        >
          <StringInput value={Object.keys(property)[0]} setValue={setName} />
        </div>
        <div
          title={"Значение свойства"}
          style={{
            overflow: "hidden",
            width: "80px",
          }}
        >
          <PropertyInputSwitch
            value={Object.values(property)[0]}
            setValue={setValue}
            setPreview={setPreview}
          />
        </div>
        <div
          title={"Удалить свойство"}
          style={{
            cursor: "pointer",
            margin: "0 5px 0 auto",
          }}
          onClick={deleteProperty}
        >
          <Icon size={"100%"} icon={cross} />
        </div>
      </div>
    </div>
  ) : (
    <DropDiv />
  );
}
