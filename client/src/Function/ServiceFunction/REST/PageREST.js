import { getRESTManager } from './RESTManager';

const {
	get,
	getCollection,
	getDocById,
	createDoc,
	updateDoc,
	getDocsByField,
	updateField,
	removeDocById,
} = getRESTManager('pages');

const getPageREST = (setState) => {
	return {
		getAppList: () => get('/getApps').then((apps) => setState((state) => ({ ...state, apps }))),

		getPages: () => getCollection().then((pageList) => setState((state) => ({ ...state, pageList }))),

		getPageById: (id) => {
			getDocById(id).then((page) => {
				setState((state) => {
					return { apps: state.apps, pageList: state.pageList, page };
				});
			});
		},

		createPage: (newPage) => {
			createDoc(newPage).then((page) => {
				getDocsByField({ name: 'appName', value: page.appName }).then((pageList) =>
					setState((state) => ({ apps: state.apps, pageList, page }))
				);
			});
		},

		updatePage: (_page) => {
			updateDoc(_page).then((page) => {
				getDocsByField({ name: 'appName', value: page.appName }).then((pageList) =>
					setState((state) => ({ ...state, pageList, page }))
				);
			});
		},

		getPagesByAppName: (value) =>
			getDocsByField({ name: 'appName', value }).then((pageList) =>
				setState((state) => ({ apps: state.apps, pageList, page: pageList.find((page) => page.domain) }))
			),

		updateAppName: (value, newValue) => {
			updateField({
				name: 'appName',
				value,
				newValue,
			}).then(() => {
				getDocsByField({ name: 'appName', value: newValue }).then((pageList) =>
					get('/getApps').then((apps) =>
						setState((state) => ({
							...state,
							pageList,
							page: pageList.find((page) => page.domain),
							apps,
						}))
					)
				);
			});
		},
		removePage: (page) => {
			removeDocById(page._id).then(() => {
				getDocsByField({ name: 'appName', value: page.appName }).then((pageList) =>
					get('/getApps').then((apps) =>
						setState({
							pageList,
							page: pageList.find((page) => page.domain),
							apps,
						})
					)
				);
			});
		},
	};
};

export default getPageREST;
