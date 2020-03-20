import React from "react";

import RowType from './Types/Row'
import TextType from './Types/Text'
import NumberType from './Types/Number'
import KeyValue from './Types/KeyValue'
import BaseType from './BaseType'


export default function TypeSwitch(props) {
  console.log("---TypeSwitch---");
console.log('props.unit', props.unit)
console.log('props.unit.settings', props.unit.settings)
    switch (props.unit.settings.type) {
      case "kv":
        return <KeyValue {...props} />;
      case "row":
        return <RowType {...props} />;
      case "unit":
        return <RowType {...props} />;
      case "doc":
        return <TextType {...props} />;
      case "num":
        return <NumberType {...props} />;
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
