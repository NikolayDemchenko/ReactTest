import { getRESTManager } from './RESTManager';

const {
	getCollection,
	getDocById,
	createDoc,
	updateDoc,
	getDocsByField,
	updateField,
	removeDocById,
	getUniqueValues,
} = getRESTManager('pages');

const getPageREST = (setState) => {
	return {
		getAppList: (set) => getUniqueValues('appName').then((items) => set(items)),
		getPages: () => getCollection().then((pageList) => setState((state) => ({ ...state, pageList }))),

		getPageById: (id) => {
			getDocById(id).then((page) => {
				setState((state) => {
					return {pageList: state.pageList, page };
				});
			});
		},

		createPage: (newPage) => {
			createDoc(newPage).then((page) => {
				getDocsByField({ name: 'appName', value: page.appName }).then((pageList) =>
					setState((state) => ({pageList, page }))
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
				setState({pageList, page: pageList.find((page) => page.startPage)||pageList[0] })
			),

		updateAppName: (value, newValue) => {
			updateField({
				name: 'appName',
				value,
				newValue,
			}).then(() => {
				getDocsByField({ name: 'appName', value: newValue }).then((pageList) =>
					setState((state) => ({
						...state,
						pageList,
						page: pageList.find((page) => page.domain),
					}))
				);
			});
		},
		removePage: (page) => {
			removeDocById(page._id).then(() => {
				getDocsByField({ name: 'appName', value: page.appName }).then((pageList) =>
					setState({
						pageList,
						page: pageList.find((page) => page.domain),
					})
				);
			});
		},
	};
};

export default getPageREST;
