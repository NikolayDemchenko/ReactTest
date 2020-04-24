import React, { useState } from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import PropertyInputSwitch from "./Switch/PropertyInputSwitch";
import { StyleContext } from "../../ControlsContext";
import StringInput from "../Inputs/StringInput";

export default function Property({
  property,
  setProperty: { setName, setValue },
  deleteProperty,
  setPreview,
  addDropProp,
  onDrop,
}) {
  const { draggedProp, setDraggedProp } = React.useContext(StyleContext);
  const [Y, setY] = useState();
  const [copy, setcopy] = useState(false);

  let div;
  const DropDiv = () => (
    <div
      style={{ height: "25px" }}
      onDrop={(e) => {
        e.stopPropagation();
        onDrop(property, draggedProp);
      }}
    />
  );

  return (
    <div
      ref={(ref) => (div = ref)}
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
      {property.target === "up" ? <DropDiv /> : null}
      <div
        draggable
        style={{
          // border: "1px solid #fff",
          display: "grid",
          gridTemplateColumns: "60% 35% 1em",
          borderBottom: "2px solid #55667766",
          background: "rgba(30,40,57,.4)",
        }}
        onDragStart={() => {
          setDraggedProp(property);
        }}
        onDragOver={(e) => {
          if (Y < e.pageY) {
            // console.log("Вниз");
            addDropProp("down");
          } else if (Y > e.pageY) {
            // console.log("Вверх");
            addDropProp("up");
          }
          setY(e.pageY);
        }}
      >
        <div
          onClick={() => console.log("Click!!!!")}
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
      {property.target === "down" ? <DropDiv /> : null}
    </div>
  );
}
