import React from "react";
import RowPanel from './RowPanel'
import NumberPanel from './NumberPanel'
import ControlPanel from './ControlPanel'
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
      case "kv":
        return <ControlPanel {...props} />;
      case "img":
        return <ControlPanel {...props} />;
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
