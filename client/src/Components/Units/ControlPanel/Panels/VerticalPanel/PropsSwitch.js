import React from "react";
import RowPanel from "./RowPanel";
import NumberPanel from "./NumberPanel";
import BasePanel from "./BasePanel";
import PropTypes from 'prop-types';
function PropsSwitch(props) {
  // console.log('props.controlPanel', props.controlPanel)
  // console.log('props.controlPanel.unit', props.controlPanel.unit)
  switch (props.value) {
    case "display":
      return <RowPanel {...props} />;
    case "flexDirection":
      return <RowPanel {...props} />;
    case "alignSelf":
      return <RowPanel {...props} />;
    case "height":
      return <RowPanel {...props} />;
    case "width":
      return <BasePanel {...props} />;
    case "backgroundColor":
      return <BasePanel {...props} />;
    case "margin":
      return <BasePanel {...props} />;
    case "marginTop":
      return <BasePanel {...props} />;
    case "marginBottom":
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
export default PropsSwitch;
