import React from "react";
import Container from "./Containers/Container";
import Row from "./Row";

export default function SwitchUnit(props) {
  switch (props.dataUnit.type) {
    case "row":
      return <Row {...props} />;
    case "doc":
      return <Container {...props} />;
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

  }
  
}
