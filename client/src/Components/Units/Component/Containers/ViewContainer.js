import React, { useState } from "react";
// import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
// import BaseUnit from "../BaseUnit";
import Value from "./ContainerInput";
import StringInput from "../Row/StringInput";
export default function ViewContainer(props) {
  const {   
      dataUnit,
    setDataUnit  
  } = props;

  console.log("!!!!!!!!!!!dataUnit", dataUnit);


  const container =
    dataUnit !== undefined &&
    dataUnit.value !== undefined &&
    dataUnit.value instanceof Array
      ? dataUnit.value
      : [];

  const getNameValue = value => {
    setDataUnit({ ...dataUnit, name: { ...dataUnit.name, value } });
    console.log("changeValue", value);
  };


 
  const [select, setSelect] = useState(false);

 

  return (     
      <div
        style={{         
          border: "2px solid yellow"
        }}
        onClick={() => {
          setSelect(true);
          console.log("Клик!!!!");
        }}
        onBlur={() => {
          setSelect(false);
          console.log("!!!!!!!!!!onBlur");
        }}
      >
        <StringInput value={dataUnit.name.value} getValue={getNameValue} />
        <Value {...props}  units={container} />
      </div>
  
  );
}
