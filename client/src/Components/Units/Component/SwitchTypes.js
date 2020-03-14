import React from "react";

import RowType from './String/RowType'
import TextType from './String/TextType'

export default function SwitchTypes(props) {

    switch (props.unit.settings.type) {
      case "row":
        return <RowType {...props} />;
      case "unit":
        return <RowType {...props} />;
      case "doc":
        return <TextType {...props} />;
      case "num":
        return <RowType {...props} />;
      case "uNum":
        return <RowType {...props} />;
      case "img":
        return <RowType {...props} />;
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
