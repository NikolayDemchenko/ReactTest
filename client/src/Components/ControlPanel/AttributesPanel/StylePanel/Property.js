import React, { useState } from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import PopupInput from "../Inputs/PopupInput/PopupInput";

function Property(props) {
  const {
    property,
    setName,
    setValue,
    deleteProperty,
    setPreview,
    onDrop,
    tabIndex,
    draggedProp,
    setDraggedProp,
  } = props;
  const [Y, setY] = useState();

  // const [copy, setcopy] = useState(false);

  const [target, setTarget] = useState();
  const propKey = Object.keys(property)[0];
  const propValue = Object.values(property)[0];

  // console.log("%cProperty", "color:#191", propKey, propValue);
  // console.log('props :>> ', props);
  // console.log('property',propKey, propValue)
  return (
    <div
      // onClick={(e) => e.stopPropagation()}
      draggable
      tabIndex={tabIndex}
      // onKeyUp={(e) => {
      //   setcopy(!copy);
      //   console.log("onKeyUp", e.key);
      // }}
      // onKeyDown={(e) => {
      //   setcopy(!copy);
      //   console.log("onKeyDown", e.key);
      // }}
      onDrop={(e) => {
        e.stopPropagation();
        onDrop(property, draggedProp, target);
      }}
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
          setTarget("down");
        } else if (Y > e.pageY) {
          // console.log("Вверх");
          setTarget("up");
        }
        setY(e.pageY);
      }}
    >
      <div
        title={"CSS свойство"}
        style={{
          padding: "0px 0.5em",
          // border: "1px solid #fff",
          width: `${propKey.length / 2}em`,
        }}
      >
        <PopupInput
          value={propKey}
          setPreview={setName}
          setValue={(val) => {
            console.log("setName", val);
            setName(val);
          }}
        />
      </div>
      <div
        title={propValue}
        style={{
          overflow: "hidden",
          width: "80px",
        }}
      >
        <PopupInput
          height="1em"
          value={propValue}
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
  );
}
export default Property;
