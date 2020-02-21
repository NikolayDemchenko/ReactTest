import React from "react";
import Name from "./Name";
import Settings from "./Settings";
import Container from './Containers/Container'
export default function Unit({ unit, style }) {
  const nameVisible={value:unit.nameVisible,click:()=>!unit.nameVisible}
  const name={value:unit.name,update:()=>null}
  return (
    <div>
      <div>
        <Name style={style} visible={nameVisible} name={name} />
        <Settings
          type={null}
          bColor={null}
          color={null}
          visible={null}
          remove={null}
          check={null}
          style={style}
        />
      </div>
     <Container/>
    </div>
  );
}
