import React, { useState } from "react";
import DataUnit from "./DataUnit";
import Container from "./Containers/Container";
export default function Unit({ unit }) {
  const defaultUnit = {
    index: 0,
    nameVisible: true,
    nameValue: "Главный папка",
    type: "unit",
    bColor: "grey",
    color: "white",
    visible: true,
    value: [
      {
        index: 0,
        nameVisible: true,
        nameValue: "Старший ребёнок 1",
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true
      },
      {
        index: 1,
        nameVisible: true,
        nameValue: "Старший ребёнок 2",
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true
      },
      {
        index: 2,
        nameVisible: true,
        nameValue: "Старший ребёнок 3",
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true
      },
      {
        index: 3,
        nameVisible: true,
        nameValue: "Младший папка",
        type: "cont",
        bColor: "grey",
        color: "white",
        visible: true,
        value: [
          {
            index: 0,
            nameVisible: true,
            nameValue: "Младший ребёнок 1",
            type: "cont",
            bColor: "grey",
            color: "white",
            visible: true
          },
          {
            index: 1,
            nameVisible: true,
            nameValue: "Младший ребёнок 2",
            type: "cont",
            bColor: "grey",
            color: "white",
            visible: true
          },
          {
            index: 2,
            nameVisible: true,
            nameValue: "Младший ребёнок 3",
            type: "cont",
            bColor: "grey",
            color: "white",
            visible: true
          }
        ]
      }
    ]
  };
  const basetUnit = {
    nameVisible: true,
    nameValue: null,
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const [Unit, setUnit] = useState(unit === !undefined ? unit : defaultUnit);
  console.log("Unit", Unit);
  const remove=()=>setUnit(basetUnit);
  return <Container dataUnit={Unit} updateUnit={setUnit} remove={remove} />;
}
