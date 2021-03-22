interface IUpdateNode {
  (nodeId: string, propName: string, propValue: string | number | object): void;
}

export type { IUpdateNode };
