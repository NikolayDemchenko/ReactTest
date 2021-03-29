interface IComponent {
//   Component: FC;
}

interface ITree extends IComponent {
  nodes: ITreeNode[];
}
interface ITreeNode extends IComponent {
  parent: ITreeNode;
  nodes: ITreeNode[];
}

class Tree implements ITree{
    nodes:ITreeNode[];
    constructor(nodes: ITreeNode[]){
        this.nodes=nodes
    }
    // Component: (props: ITree) =>( <div/>);
  }
export type { ITree };