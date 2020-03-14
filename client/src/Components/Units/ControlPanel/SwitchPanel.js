import React from "react";
import RowPanel from './RowPanel'
export default function SwitchPanel(props) {
  // console.log('props.unit.settings', props.unit)
    switch (props.controlPanel.unit.settings.type) {
      case "row":
        return <RowPanel {...props} />;
      case "unit":
        return <RowPanel {...props} />;
      case "doc":
        return <RowPanel {...props} />;
      case "num":
        return <RowPanel {...props} />;
      case "uNum":
        return <RowPanel {...props} />;
      case "img":
        return <RowPanel {...props} />;
      case "video":
        return <RowPanel {...props} />;
      case "cont":
        return <RowPanel {...props} />;
      case "iCont":
        return <RowPanel {...props} />;
      default:
        return <RowPanel {...props} />;
    }
}
