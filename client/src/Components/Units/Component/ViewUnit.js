import React, { useState } from "react";
import ViewContainer from "./Containers/ViewContainer";
export default function ViewUnit({ unit }) {
 
  const [dataUnit, setDataUnit] = useState(unit
  );
  console.log("!!!!!!!Unit", dataUnit);
  return (
    <ViewContainer
      // reset={() => setDataUnit(baseElement)}
      // defaultUnit={defaultUnit}
      dataUnit={dataUnit}
      setDataUnit={setDataUnit}
      // buttonColor={dataUnit.btnColor}
    />
  );
}
