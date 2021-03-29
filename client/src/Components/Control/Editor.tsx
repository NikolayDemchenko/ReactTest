import React, {
  FC,
  ReactElement,
  useState,
} from 'react';

import { NodeManager } from '../../AppFunction';
import {
  TNode,
  TPage,
  TSetState,
} from '../../Types/BaseTypes';
import { IFCEditor } from '../../Types/IProps';
import PageComponent from '../View/Pages/Page';
import AttributesPanel from './AttributesPanel/AttributesPanel';

class PageEditor implements IFCEditor {
  page: TPage;
  setPage: TSetState<TPage>;
  Component:ReactElement;
  constructor(page: TPage, setPage: TSetState<TPage>) {
    this.page = page;
    this.setPage = setPage;
    this.Component = <EditorComponent {...{ page, setPage }}/>;
  }
}

const EditorComponent:FC<IFCEditor> = ({ page, setPage }) => {
  console.log("Editor :>> ");
  const [assignStyleId, setAssignStyleId] = useState<string>();
  const [node, setNode] = useState<TNode>();

  // console.log('page :>> ', page);
  //   console.log("page.nodes :>> ", page.nodes);
  const nodeManager = new NodeManager(page, setPage);
  const { classes } = nodeManager;

  const onClick = assignStyleId
    ? (selectedId: string) =>
        nodeManager.updateNode(selectedId, "styleId", assignStyleId)
    : (node: TNode) => setNode(node);

  return (
    <>
      {node && (
        <AttributesPanel
          {...{
            setPage,
            page,
            node,
            nodeManager,
            assignStyleId,
            setAssignStyleId,
          }}
        />
      )}
      <PageComponent
        {...{
          page,
          selectedId: node && node.id,
          onClick,
          classes,
        }}
      />
    </>
  );
};

export default PageEditor;
