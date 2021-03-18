import React, { useState, useContext, useEffect } from 'react';
import PageList from './Pages/PageList';
import jss from 'jss';
import preset from 'jss-preset-default';
import { Context } from '../../../AppFunction';
import { log, funcLog } from '../../../Log';
import Application from './Applications/Application';
function NavigationPanel({ updatePage }) {
	const {
		page,
		PageREST: { getPagesByAppName },
	} = useContext(Context);
	const [pageList, setPageList] = useState();
	const [selection, setSelection] = useState(page.name);
	// console.log('selection', selection);
	// !pageList && getPagesByAppName(setPageList, page.appName);
  // console.log(`pageList`, pageList);
	useEffect(() => {
    console.log(`pageList`, pageList);

    // page.appName Не существует, нужно сделать загрузку приложения потом получить его имя
		getPagesByAppName(setPageList, page.appName);
		return () => {};
	}, [page]);

	const style = {
		minWidth: '280px',
		maxWidth: '280px',
		maxHeight: '95vh',
		overflowY: 'auto',
		color: 'rgba(140, 200, 255, 0.8)',
		boxShadow: '2px 10px 5px 2px #00000055',
		'&::-webkit-scrollbar': { width: '20px' },
		'&::-webkit-scrollbar-thumb': { backgroundColor: '#567' },
	};
	jss.setup(preset());
	const { classes } = jss.createStyleSheet({ style }).attach();
	return (
		<div className={classes.style}>
			{/* <Application {...{ selection, setSelection, pageList }} />
			Pages: <PageList {...{ selection, setSelection, updatePage, pageList }} /> */}
		</div>
	);
}
export default log(NavigationPanel);
// export default NavigationPanel;
