import React, { useState } from "react";
import log from "../../../../Log";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import PopupInput from "../Inputs/PopupInput/PopupInput";

function Property(props) {
  const {
    tabIndex,
    // property,
    name,
    value,
    setPreview,
    setName,
    setValue,
    deleteProperty,
    onDrop,
    draggedProp,
    setDraggedProp,
  } = props;
  // console.log('props :>> ', props);
  const [Y, setY] = useState();
  // const [copy, setcopy] = useState(false);

  const [target, setTarget] = useState();
  // const propKey = Object.keys(property)[0];
  // const propValue = Object.values(property)[0];

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
        onDrop({ [name]: value }, draggedProp, target);
      }}
      style={{
        // border: "1px solid #fff",
        display: "grid",
        gridTemplateColumns: "60% 35% 1em",
        borderBottom: "2px solid #55667766",
        background: "rgba(30,40,57,.4)",
      }}
      onDragStart={() => {
        // setDraggedProp(property);
        setDraggedProp({ [name]: value });
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
          // width: `${name.length / 2}em`,
        }}
      >
        <PopupInput
          // value={propKey}
          value={name}
          setPreview={setName}
          setValue={(val) => {
            console.log("setName", val);
            setName(val);
          }}
        />
      </div>
      <div
        title={value}
        style={{
          overflow: "hidden",
          width: "80px",
        }}
      >
        <PopupInput {...{ value, setValue, setPreview }} height="1em" />
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


  return prevProps.value === nextProps.value;
}

export default React.memo(Property);
// export default React.memo(log(Property));
// export default React.memo(log(Property), areEqual);