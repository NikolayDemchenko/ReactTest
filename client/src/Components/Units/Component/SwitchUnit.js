import React from "react";
import Container from "./Containers/Container";
import Row from "./Row/Row";
import Doc from './Doc/Doc'

export default function SwitchUnit(props) {
  // console.log('props.dataUnit', props.dataUnit)
    switch (props.dataUnit.type) {
      case "row":
        return <Row {...props} />;
      case "unit":
        return <Container {...props} />;
      case "doc":
        return <Doc {...props} />;
      case "num":
        return <Container {...props} />;
      case "uNum":
        return <Container {...props} />;
      case "img":
        return <Container {...props} />;
      case "video":
        return <Container {...props} />;
      case "cont":
        return <Container {...props} />;
      case "iCont":
        return <Container {...props} />;
      default:
        return <Container {...props} />;
    }
}
