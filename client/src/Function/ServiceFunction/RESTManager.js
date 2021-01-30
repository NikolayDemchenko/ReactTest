import axios from 'axios';
const clog = true;
export const GetRESTManager = (page, setState) => {
	const setPage = (page) => {
		setState((state) => ({ ...state, page }));
	};
	return {
		getApps: () => {
			clog && console.log('getApps');
			axios({
				method: 'get',
				url: 'http://localhost:8000/getApps',
			})
				.then((response) => {
					setState((state) => ({ ...state, appList: response.data }));
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		getPages: () => {
			axios({
				method: 'get',
				url: 'http://localhost:8000/getPages',
			})
				.then((response) => {
					clog && console.log('getPages', response.data);
					setPage(response.data);
				})
				.catch(function (error) {
					console.log(error);
				});
		},
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
						pageList: response.data.pages,
						appList: state.appList,
						appName,
						page: response.data.startPage,
					}));
					// setPage(response.data.startPage);
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
					setPage({ ...response.data });
					setState((state) => {
						const { _id, name, domain, appName } = response.data;
						return {
							...state,
							pageList: [...state.pageList, { _id, name, domain, appName }],
						};
					});
				})
				.catch(function (error) {
					console.log(error);
				});
		},
		updatePage: () => {
			clog && console.log('updatePage');
			axios({
				method: 'post',
				url: 'http://localhost:8000/updatePage',
				data: { page: JSON.stringify(page) },
			})
				.then((response) => {
					clog && console.log(response.data);
					setPage({ ...response.data });
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
					setPage(response.data);
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
