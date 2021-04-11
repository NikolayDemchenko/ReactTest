import React, { FC } from 'react';

import {
  IFCItem,
  TProperties,
  TreeViewCreator,
} from '../TreeView';
import { styleView } from './Style';

const List: FC<{ properties?: TProperties }> = ({ children, properties }) => {
  return (
    <div className={styleView.listContainer}>
      <div className={styleView.listTitle}>{properties && properties.name}</div>
      {children}
    </div>
  );
};

// const setPreview = (nodeId:string,value:string|number) => {
// 	document.getElementById(nodeId)!.className = jss
// 		.createStyleSheet({ className: { ...previewBase, [name]: value } })
// 		.attach().classes.className;
// };

const Item: FC<IFCItem> = ({ variable, setItem, children }) => {
  const setValue = (value: string) => {
    setItem({ name: variable!.name, value });
  };
  console.log(`variable.value`, variable.value)
  return (
    <div className={styleView.nodeContainer}>
      <div className={styleView.propContainer}>
        <div className={styleView.propName}>{variable.name}</div>
        <div className={styleView.propValue}>
		{/* {variable.value} */}
          {/* <PopupInput
                  {...{
                    value: variable.value as string,
                    setValue: setValue,
                    setPreview: setValue,
                  }}
                  height="1em"
                /> */}
          {/* {properties[name]} */}
        </div>
      </div> 
      {children}
    </div>
  );
};

export const StyleView = TreeViewCreator(List, Item);
