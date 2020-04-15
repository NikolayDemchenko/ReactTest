import React, { useState } from "react";
import Icon from "react-icons-kit";
import { cross } from "react-icons-kit/icomoon/cross";
import PropertyInputSwitch from "./Switch/PropertyInputSwitch";
import StringInput from "../Inputs/StringInput";
export default function Property({
  property,
  setProperty: { setName, setValue },
  deleteProperty,
  setPreview,
}) {
 const  block= <div
 onDragOver={(e) => {
   // e.stopPropagation();
  //  setstyle({ ...style, height: "2em" });
  setDiv(block);
 }}
 onDragLeave={(e) => {
   // e.preventDefault()
  //  setstyle({height: "0em" });
  setDiv();

 }}
 style={{height: "2em"}}
/>
  // console.log('property', property)
  const [style, setstyle] = useState({transition:".3s"});
  const [prop, setProp] = useState(true);
  const [div, setDiv] = useState();
  return (
   prop===true? <div
      draggable
      // onDragStart={(e) => {
      //   // e.persist();
      //   e.dataTransfer.setData("transfer", e.target.id);
      //   console.log("property", property);
      // }}
      onDragOver={(e) => {
        //  setstyle({...style,height: "2em"});
         setDiv(block);
      }}
      onDrop={(e) => {
        setDiv();
        // e.stopPropagation();
        // setstyle({ ...style, height: "0em" });
      }}
      // onDrag={()=>{
      //   setProp(false);
      //   console.log("Seychas");
      // }}
      onDragLeave={(e) => {
        // e.stopPropagation()
        // setstyle({transition:"0.3s",height: "0px"});
        // setDiv();
      }}
      // style={{border: "1px solid #fff",}}
    >
     {div}
      <div
        style={{
          // border: "1px solid #fff",
          display: "grid",
          gridTemplateColumns: "60% 35% 1em",
          // marginTop: "2px",
          borderBottom: "2px solid #55667766",
          background: "rgba(30,40,57,.4)",
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
    </div>:null
  );
}
