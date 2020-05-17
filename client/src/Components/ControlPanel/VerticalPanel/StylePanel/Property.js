import React, { useState } from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import PopupInput from "../Inputs/Popup/PopupInput";

function Property({
  property,
  setProperty: { setName, setValue },
  deleteProperty,
  setPreview,
  onDrop,
  tabIndex,
  draggedProp,
  setDraggedProp,
}) {
  console.log("%cProperty", "color:#191");

  const [Y, setY] = useState();
  const [copy, setcopy] = useState(false);
  const [target, setTarget] = useState();
  const propKey = Object.keys(property)[0];
  const propValue = Object.values(property)[0];
  return (
    <div
      draggable
      tabIndex={tabIndex}
      onKeyUp={(e) => {
        setcopy(!copy);
        console.log("onKeyUp", e.key);
      }}
      onKeyDown={(e) => {
        setcopy(!copy);
        console.log("onKeyDown", e.key);
      }}
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
        <PopupInput value={propKey} setValue={setName} />
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

function areEqual(prevProps, nextProps) {
  // console.log('prevProps', prevProps)
  // console.log('nextProps', nextProps)
  const prev = Object.values(prevProps.property)[0];
  const next = Object.values(nextProps.property)[0];
  // console.log(`%cprev ${prev}`,'border:solid 1px #e33; color: #333')
  // console.log(`%cnext ${next}`,'color: #f33')
  // prev===next?console.log(`%c${prev} равно ${next}`, 'border:solid 1px #e33; color: #333'):console.log(`%c${prev} не равно ${next}`, 'color: #f33')
  return prev === next && prevProps.draggedProp === nextProps.draggedProp
    ? true
    : false;
}
export default React.memo(Property, areEqual);
