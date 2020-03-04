// import React, { useState } from "react";
// import style from "../Unit.module.css";
// import SwitchUnit from "./SwitchUnit";
// export default function DataUnit({dataUnit, unit, parent, updateParent }) {
//   const defaultUnit = {
//     nameVisible: true,
//     nameValue: null,
//     type: "cont",
//     bColor: "grey",
//     color: "white",
//     visible: true
//   };
//   // const [dataUnit, setDataUnit] = useState(unit);
//   const updateUnit = newUnit => {
//     console.log("newUnit", newUnit);
//     // setDataUnit(newUnit);
//     if (parent !== undefined) {
//       const value = parent.value.map(unit =>
//         unit.index === newUnit.index ? { ...newUnit } : unit
//       );
//       updateParent({ ...parent, value });
//     }
//   };
//   const removeUnit = newUnit => {
//     // console.log("removeUnit", newUnit);
//     // if (parent !== undefined) {
//     const value = parent.value.filter(unit => unit.index !== newUnit.index);
//     updateParent({ ...parent, value });
//     // }
//     // else {
//     //   setDataUnit(defaultUnit);
//     // }
//   };
//   console.log("dataUnit.nameValue", dataUnit.nameValue);
//   // console.log('dataUnit', dataUnit)
//   // console.log("unit", unit);
//   return (
//     <div>
//       <SwitchUnit
//         defaultUnit={defaultUnit}
//         removeUnit={removeUnit}
//         updateUnit={updateUnit}
//         parent={parent}
//         dataUnit={dataUnit}
//         // setDataUnit={setDataUnit}
//         style={{
//           contStyle: style.RowContainer,
//           nameContStyle: style.RowContainer,
//           nameBtnStyle: style,
//           setsContStyle: style.RowContainer,
//           setsBtnStyle: style
//         }}
//       />
//     </div>
//   );
// }
