import React, { useState } from "react";
import Container from "./Containers/Container";
export default function Unit({ unit }) {
  const testUnit = {
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
          }
        ]
      }
    ]
  };
  const defaultUnit = {
    index: 0,
    nameVisible: true,
    nameValue: null,
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const baseElement = {
    index: 0,
    nameVisible: true,
    nameValue: null,
    type: "unit",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const [dataUnit, setDataUnit] = useState(
    unit === !undefined ? unit : baseElement
  );
  console.log("Unit", dataUnit);
  return (
    <Container
      reset={() => setDataUnit(baseElement)}
      defaultUnit={defaultUnit}
      dataUnit={dataUnit}
      setDataUnit={setDataUnit}
      on={[135, 115, 210]} active={ [235, 115, 210]} 
    />
  );
}
