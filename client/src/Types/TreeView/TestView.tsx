import React, { FC } from 'react';

import { classes } from './TestViewStyle';
import {
  IFCItem,
  TProperties,
  TreeViewCreator,
} from './TreeView';

const List: FC<{ properties?: TProperties }> = ({ children, properties }) => {
	return (		
			<div className={classes.listContainer}>
				<div className={classes.listTitle}>{properties && properties.name}</div>
				{children}
			</div>		
	);
};

const Item: FC<IFCItem> = ({ variable, children }) => {
	return (
		<div className={classes.nodeContainer}>
			{Object.keys(variable!).map((name, index) => (
					<div className={classes.propContainer} key={index}>
						<div className={classes.propName}>{name}</div>
						<div className={classes.propValue}>{variable}</div>
					</div>
				))}
			{children}
		</div>
	);
};

export const TestView = TreeViewCreator(List, Item);
