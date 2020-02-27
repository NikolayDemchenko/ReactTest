import React, { useState } from "react";
import style from "../Unit.module.css";
import SwitchUnit from "./SwitchUnit";
export default function Unit({ unit }) {
  const defaultUnit = {
    nameVisible: true,
    nameValue: null,
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const [dataUnit, setDataUnit] = useState(
    unit === !undefined ? unit : defaultUnit
  );
  console.log("dataUnit", dataUnit);

  return (
    <div>
      <SwitchUnit
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
