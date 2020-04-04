import React from "react";
import PropTypes from "prop-types";

import RowType from "./Row";
import TextType from "./Text";
import NumberType from "./Number";
import KeyValue from "./KeyValue";
import BaseType from "./BaseType";
import Div from "./Div";

function TypeSwitch(props) {
  // console.log("---TypeSwitch---");
  // console.log("......props.unit.type", props.unit.type);
  switch (props.unit.type) {
    // case "div":
    //   return <Div {...props} />;
    // case "kv":
    //   return <KeyValue {...props} />;
    // case "row":
    //   return <RowType {...props} />;
    // case "unit":
    //   return <RowType {...props} />;
    // case "doc":
    //   return <TextType {...props} />;
    // case "num":
    //   return <NumberType {...props} />;
    // case "img":
    //   return <BaseType {...props} />;
    // case "video":
    //   return <RowType {...props} />;
    // case "cont":
    //   return <BaseType {...props} />;
    // case "iCont":
    //   return <RowType {...props} />;
    default:
      return <Div {...props} />;
  }
}
TypeSwitch.propTypes = {
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
};
export default TypeSwitch;
