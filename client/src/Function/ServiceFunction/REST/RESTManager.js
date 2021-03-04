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
		// console.log('res.data', res.data);
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

export const getRESTManager = (collectionName) => {
	return {
		get,
		post,
		put,
		// Возвращает коллекцию
		getCollection: () => get(`/${collectionName}/getCollection`),
		// Возвращает документ по id
		getDocById: (_id) => get(`/${collectionName}/getDocById`, { _id }),
		// Создает новый документ и возвращает его
		createDoc: (value) => post(`/${collectionName}/createDoc`, { value: JSON.stringify(value) }),
		// Обновляет документ и возвращает обновленный
		updateDoc: (value) => post(`/${collectionName}/updateDoc`, { value: JSON.stringify(value) }),
		// Возвращает все документы с одинаковым значением указанного поля
		getDocsByField: (value) => get(`/${collectionName}/getDocsByField`, value),
		// Находит все документы с одинаковым значением указанного поля и обновляет указанное поле в этих документах
		updateField: (value) => put(`/${collectionName}/updateField`, { value: JSON.stringify(value) }),
	// Удаляет документ по id
		removeDocById: (_id) => post(`/${collectionName}/removeDocById`, { _id }),
	};
};
