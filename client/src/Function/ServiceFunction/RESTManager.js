import axios from 'axios';
const url = 'http://localhost:8000/';
const get = async (requestName, params) => {
	console.log(`%cget :>> ${requestName}`, 'color:#070');
	try {
		const res = await axios({
			method: 'get',
			url: `${url}${requestName}`,
			params,
		});
		console.log('res.data', res.data);
		return res.data;
	} catch (e) {
		console.error(e);
	}
};
const post = async (requestName, data) => {
	console.log(`%cpost :>> ${requestName}`, 'color:#700');
	// console.log('data', data)
	try {
		const res = await axios({
			method: 'post',
			url: `${url}${requestName}`,
			data,
		});
		// console.log('res.data', res.data)
		return res.data;
	} catch (e) {
		console.error(e);
	}
};
const put = async (requestName, data) => {
	console.log(`%cput :>> ${requestName}`, 'color:#007');
	// console.log('data', data)
	try {
		const res = await axios({
			method: 'put',
			url: `${url}${requestName}`,
			data,
		});
		// console.log('res', res)
		return res;
	} catch (e) {
		console.error(e);
	}
};

export const GetRESTManager = () => {
	return {
		getApps: () => get('getApps'),
		getPageById: (_id) => get('getPageById', { _id }),
		getDocsByField: (value) => get('getPagesByAppName',  value ),
		createPage: (page) => post('createPage', { page: JSON.stringify(page) }),
		updatePage: (page) => post('updatePage', { page: JSON.stringify(page) }),
		updateField: (value) => put('updateAppName', { value: JSON.stringify(value) }),
		removePageById: (_id) => post('removePageById', { _id }),

		// getStyles: () => get('getStyles'),
		// getStyleById: (_id) => get('getStyleById', { _id }),
		// createStyle: (style) => post('createStyle', { style: JSON.stringify(style) }),
		// updateStyle: (style) => post('updateStyle', { style: JSON.stringify(style) }),
		// removeStyleById: (_id) => post('removeStyleById', { _id }),
	};
};
