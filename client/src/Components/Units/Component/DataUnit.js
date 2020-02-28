import React, { useState } from "react";
import style from "../Unit.module.css";
import SwitchUnit from "./SwitchUnit";
export default function DataUnit({unit, parent,updateParent }) {
  const [dataUnit, setDataUnit] = useState({...unit});

  return (
    <div>
      <SwitchUnit
        parent={parent}
        updateParent={updateParent}
        dataUnit={dataUnit}
        setDataUnit={setDataUnit}
        style={{
          contStyle: style.RowContainer,
          nameContStyle: style.RowContainer,
          nameBtnStyle: style,
          setsContStyle: style.RowContainer,
          setsBtnStyle: style
        }}
      />
    </div>
  );
}
