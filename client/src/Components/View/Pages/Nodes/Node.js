import React, { useContext } from "react";
import Nodes from "./Nodes";
import { log, funcLog } from "../../../../Log";
import { Context } from "../../../../AppFunction";
function Node(props) {
  const { node, onClick, classes } = props;

  const click = (e) => { 
    e.stopPropagation();
    onClick(node);
  };

  const { page } = useContext(Context);
  const nodes = page.nodes.filter(({ parentId }) => parentId === node.id);

  return (
    <div style={{ outline: props.selectedId === node.id && "1px dashed #5af" }}>
      <node.tag id={node.id} className={classes[node.styleId]} onClick={click}>
        {nodes && <Nodes {...props} nodes={nodes} />}
      </node.tag>
    </div>
  );
}

export default React.memo(log(Node));
