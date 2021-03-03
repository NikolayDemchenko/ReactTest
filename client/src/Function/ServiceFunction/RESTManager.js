import axios from 'axios';
const url = 'http://localhost:8000';
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
		getApps: () => get('/getApps'),
		getDocById: (_id) => get('/pages/getCollection'),
		getDocById: (_id) => get('/pages/getDocById', { _id }),
		getDocsByField: (value) => get('/pages/getDocsByField',  value ),
		createDoc: (value) => post('/pages/createDoc', { value: JSON.stringify(value) }),
		updateDoc: (value) => post('/pages/updateDoc', { value: JSON.stringify(value) }),
		updateField: (value) => put('/pages/updateField', { value: JSON.stringify(value) }),
		removeDocById: (_id) => post('/pages/removeDocById', { _id }),

		// getStyles: () => get('getStyles'),
		// getStyleById: (_id) => get('getStyleById', { _id }),
		// createStyle: (style) => post('createStyle', { style: JSON.stringify(style) }),
		// updateStyle: (style) => post('updateStyle', { style: JSON.stringify(style) }),
		// removeStyleById: (_id) => post('removeStyleById', { _id }),
	};
};
