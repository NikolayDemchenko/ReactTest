import React from "react";

import RowType from './StringTypes/RowType'
import TextType from './StringTypes/TextType'
import NumberType from './NumberTypes/NumberType'
import BaseType from './BaseType'
import WithUnitType from './NumberTypes/WithUnitType'

export default function SwitchTypes(props) {

    switch (props.unit.settings.type) {
      case "row":
        return <RowType {...props} />;
      case "unit":
        return <RowType {...props} />;
      case "doc":
        return <TextType {...props} />;
      case "num":
        return <NumberType {...props} />;
      case "uNum":
        return <WithUnitType {...props} />;
      case "img":
        return <BaseType {...props} />;
      case "video":
        return <RowType {...props} />;
      case "cont":
        return <RowType {...props} />;
      case "iCont":
        return <RowType {...props} />;
      default:
        return <RowType {...props} />;
    }
}
