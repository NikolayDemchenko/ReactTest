import axios from 'axios';
const clog = true;
export const GetRESTManager = (setState) => {
	return {
		getApps: () => {
			clog && console.log('getApps');
			axios({
				method: 'get',
				url: 'http://localhost:8000/getApps',
			})
				.then((response) => {
					// console.log('response.data', response.data)
					setState((state) => ({ ...state, appList: response.data }));
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		// getPages: () => {
		// 	axios({
		// 		method: 'get',
		// 		url: 'http://localhost:8000/getPages',
		// 	})
		// 		.then((response) => {
		// 			clog && console.log('getPages', response.data);
		//
		//    setState((state) => ({ ...state, page: response.data }));
		// 		})
		// 		.catch(function (error) {
		// 			console.log(error);
		// 		});
		// },
		getPagesByAppName: (appName) => {
			axios({
				method: 'get',
				url: 'http://localhost:8000/getPagesByAppName',
				params: {
					appName,
				},
			})
				.then((response) => {
					clog && console.log('getPagesByAppName', response.data.pages);
					setState((state) => ({
						...state,
						pageList: response.data.pages,
						appList: state.appList,
						appName,
						page: response.data.startPage,
					}));
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		createPage: (page) => {
			axios({
				method: 'post',
				url: 'http://localhost:8000/createPage',
				data: { page: JSON.stringify(page) },
			})
				.then((response) => {
					clog && console.log('createPage', response.data);
					setState((state) => {
						console.log('state', state);
						const { _id, name, domain, appName } = response.data;
						return !page.domain
							? {
									...state,
									page: { ...response.data },
									pageList: [...state.pageList, { _id, name, domain, appName }],
							  }
							: {
									...state,
									page: { ...response.data },
									appList: [...state.appList, appName],
									pageList: [{ _id, name, domain, appName }],
							  };
					});
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		updatePage: (page) => {
			clog && console.log('updatePage');
			axios({
				method: 'post',
				url: 'http://localhost:8000/updatePage',
				data: { page: JSON.stringify(page) },
			})
				.then((response) => {
					clog && console.log(response.data);
					setState((state) => ({ ...state, page: response.data }));
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		getPageById: (_id) => {
			clog && console.log('getPageById');
			axios({
				method: 'get',
				url: 'http://localhost:8000/getPageById',
				params: {
					_id,
				},
			})
				.then((response) => {
					// console.log("response.data!", response.data);
					setState((state) => ({ ...state, page: response.data }));
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		removePageById: (_id) => {
			clog && console.log('removePageById');
			axios({
				method: 'post',
				url: 'http://localhost:8000/removePageById',
				params: {
					_id,
				},
			})
				.then(() => {
					setState((state) => {
						return {
							...state,
							pageList: [...state.pageList.filter((page) => page._id !== _id)],
						};
					});
				})
				.catch(function (error) {
					console.log(error);
				});
		},
	};
};
