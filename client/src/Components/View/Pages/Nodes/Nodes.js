import React from "react";
import { log, funcLog } from "../../../../Log";
import Node from "./Node";
function Nodes(props) {
  // console.log("props", props);
  return props.nodes.map((node, key) => {
    return <Node key={key} {...{ ...props, node }} />;
  });
}
export default log(Nodes);
