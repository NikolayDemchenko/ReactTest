import React from "react";
import RowPanel from './Panels/RowPanel'
import NumberPanel from './Panels/NumberPanel'
import ControlPanel from './Panels/BasePanel'
export default function SwitchPanel(props) {
  // console.log('props.unit.settings', props.unit)
    switch (props.controlPanel.unit.type) {
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
