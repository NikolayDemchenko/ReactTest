import React, { useState } from "react";
import DataUnit from "./DataUnit";
export default function Unit({ unit }) {
  const defaultUnit = {
    nameVisible: true,
    nameValue: null,
    type: "unit",
    bColor: "grey",
    color: "white",
    visible: true,
    value: [
      {
        nameVisible: true,
        nameValue: null,
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true
      },
      {
        nameVisible: true,
        nameValue: null,
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true
      },
      {
        nameVisible: true,
        nameValue: null,
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true
      },
      {
        nameVisible: true,
        nameValue: null,
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true,
        value: [
          {
            nameVisible: true,
            nameValue: null,
            type: "cont",
            bColor: "grey",
            color: "white",
            visible: true
          },
          {
            nameVisible: true,
            nameValue: null,
            type: "cont",
            bColor: "grey",
            color: "white",
            visible: true
          },
          {
            nameVisible: true,
            nameValue: null,
            type: "cont",
            bColor: "grey",
            color: "white",
            visible: true
          }
        ]
      }
    ]
  };
  const [Unit, setUnit] = useState(unit === !undefined ? unit : defaultUnit);
  // console.log("dataUnit", dataUnit);
  const getData = unit => {
    // setUnit(unit)
    console.log("unit!!!!", unit);
  };
  return (
    <div>
      <DataUnit unit={Unit} setUnit={setUnit} getData={getData} />
    </div>
  );
}
