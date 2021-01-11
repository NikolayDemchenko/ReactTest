import React from "react";
import {log,funcLog} from "../../../../Log";
import Node from "./Node";
// import HocTag from "./HocTag";
function Nodes(props) {
  // console.log("props", props);
  return props.nodes.map((node, key) => {
    return (
      <div
        key={key}
        style={{ outline:props.selectedId === node.id && "1px dashed #5af" }}
      >
        <Node {...{ ...props,  node }} />
      </div>
    );
  });
}
export default log(Nodes);
