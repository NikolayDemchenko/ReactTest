import React,{useState} from "react";
import style from '../Unit.module.css'
import Name from "./Name";
import Settings from "./Settings";
import Container from "./Containers/Container";
export default function Unit({ unit }) {
const [nVise,setnVise]=useState(true)
  const click= () =>{ 
    setnVise(!nVise)
    console.log("nVise",nVise)
  }
  const divName=nVise=== true?style.thisDiv1:style.thisDiv2
  
  // const name = { value: unit.name, update: () => null };
  return (
    <div className={divName} onClick={click} >
      <div  >
        {/* <Name style={style} visible={nameVisible} name={name} />
        <Settings
          type={null}
          bColor={null}
          color={null}
          visible={null}
          remove={null}
          check={null}
          style={style}
        /> */}
      </div>
      <Container />
    </div>
  );
}
