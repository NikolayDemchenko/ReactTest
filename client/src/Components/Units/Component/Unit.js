import React, { useState } from "react";
import Container from "./Containers/Container";
import ViewUnit from "./ViewUnit";
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
    name: { visible: true, value: null },
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const _on =250
  const _off =120
  const _active =180
  const baseElement = {
    index: 0,
    name: { visible: true, value: null },
    type: "unit",
    bColor: "grey",
    color: "white",
    visible: true,
    btnColor: { on: [_on, _on, _on], active: [_active, _active, _active],off: [_off, _off, _off] }
  };
  const [dataUnit, setDataUnit] = useState(
    unit === !undefined ? unit : baseElement
  );
  console.log("Unit", dataUnit);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Container
        reset={() => setDataUnit(baseElement)}
        defaultUnit={defaultUnit}
        dataUnit={dataUnit}
        setDataUnit={setDataUnit}
        buttonColor={dataUnit.btnColor}
      />
    </div>
  );
}
