import React from "react";
import RowPanel from "./RowPanel";
import NumberPanel from "./NumberPanel";
import BasePanel from "./BasePanel";
import PropTypes from 'prop-types';
function PanelSwitch(props) {
  // console.log('props.controlPanel', props.controlPanel)
  // console.log('props.controlPanel.unit', props.controlPanel.unit)
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
      return <BasePanel {...props} />;
    case "img":
      return <BasePanel {...props} />;
    case "video":
      return <BasePanel {...props} />;
    case "cont":
      return <BasePanel {...props} />;
    case "iCont":
      return <RowPanel {...props} />;
    default:
      return <RowPanel {...props} />;
  }
}
PanelSwitch.propTypes = {
  controlPanel: PropTypes.shape({
    unit: PropTypes.shape({
      type: PropTypes.string,
      settings: PropTypes.shape({
        size: PropTypes.shape({
          height: PropTypes.string,
          width: PropTypes.string
        }),
        index: PropTypes.number,
        color: PropTypes.array,
        visible: PropTypes.bool
      }),
      value: PropTypes.object
    }),
    setUnit: PropTypes.func
  })
};
export default PanelSwitch;
