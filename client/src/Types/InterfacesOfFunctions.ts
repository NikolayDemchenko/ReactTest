interface IUpdateProp {
  (nodeId: string, propName: string, propValue: string | number | object): void;
}

export type { IUpdateProp };
