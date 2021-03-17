interface Application {
  id: string;
  name: string;
  domain: string;
  startPageId: string;
}
interface Page {
  id: string;
  ApplicationId: string;
  name: string;
  //   bodyStyle: object;
  styles: Style[];
  nodes: Node[];
}
interface Style {
  id: string;
  name: string;
  data: object;
}
interface Node {
  id: string;
  index: number;
  parentId: string | null;
  tag: string;
  styleId: string;
}
export type { Application, Page, Node, Style };
