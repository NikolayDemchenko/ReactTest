const { ObjectId } = require('mongodb');
const createDoc = (req, res, collectionName) => {
	req.app.locals[collectionName].insertOne(JSON.parse(req.body.value), (err, result) => {
		if (err) return console.log(err);
		res.send(result.ops[0]);
	});
	console.log(`create document`);
};

const updateDoc = (req, res, collectionName) => {
	console.log(`start update document`);
	const document = JSON.parse(req.body.value);
	// console.log(`document`,document);
	const _id = ObjectId(document._id);
	req.app.locals[collectionName].replaceOne(
		{ _id },
		 { ...document, _id },
	).then(() => {
		res.send(200);
		console.log(`replaced ${collectionName} with id`, _id);
	});
};
// Переделать для возможности глубокого обновления без ограничений
const updateField = (req, res, collectionName) => {
	const { name, value, newValue } = JSON.parse(req.body.value);
	console.log(`update field: `, JSON.parse(req.body.value));
	req.app.locals[collectionName]
		.updateMany(
			{ [name]: value }, // критерий фильтрации
			{ $set: { [name]: newValue } } // параметр обновления
		)
		.then(() => res.status(200).json({}))
		.catch((error) => console.error(error));
};

const removeDocById = (req, res, collectionName) => {
	const _id = req.body._id;
	req.app.locals[collectionName]
		.deleteOne({ _id: new ObjectId(_id) })
		.then(() => {
			res.send(200);
			console.log(`remove ${collectionName} by id`, _id);
		})
		.catch((error) => console.error(error));
};
const getCollection = (req, res, collectionName) => {
	console.log(`get ${collectionName}`);
	req.app.locals[collectionName]
		.find({})
		.toArray()
		.then((response) => res.status(200).json(response))
		.catch((error) => console.error(error));
};

const getDocById = (req, res, collectionName) => {
	const _id = req.query._id;
	req.app.locals[collectionName]
		.find({ _id: new ObjectId(_id) })
		.toArray()
		.then((response) => {
			res.status(200).json(response[0]);
			console.log(`get ${collectionName}`, _id);
		})
		.catch((error) => console.error(error));
};
const getDocsByField = (req, res, collectionName) => {
	const { name, value } = req.query;
	console.log(`get ${collectionName} by field :>> `, name, value);
	req.app.locals[collectionName]
		.find({ [name]: value })
		.toArray()
		.then((response) => {
			console.log(`response`, response)
			res.status(200).json(response)
		})
		.catch((error) => console.error(error));
};
const getUniqueValues = (req, res, collectionName) => {
	const { fieldName } = req.query;
	console.log(`get a list of unique values for the ${fieldName} field in ${collectionName}`);
	req.app.locals[collectionName]
		.find({})
		.toArray()
		.then((response) => {
			res.status(200).json(Array.from(new Set(response.map((res) => res[fieldName]))));
		})
		.catch((error) => console.error(error));
};

const getRouters = (router, collectionName) => {
	// Возвращает коллекцию
	router.get(`/${collectionName}/getCollection`, (req, res) => getCollection(req, res, collectionName));
	// Возвращает массив уникальных значений указанного поля
	router.get(`/${collectionName}/getUniqueValues`, (req, res) => getUniqueValues(req, res, collectionName));
	// Возвращает документ по id
	router.get(`/${collectionName}/getDocById`, (req, res) => getDocById(req, res, collectionName));
	// Создает новый документ и возвращает его
	router.post(`/${collectionName}/createDoc`, (req, res) => createDoc(req, res, collectionName));
	// Обновляет документ и возвращает обновленный
	router.post(`/${collectionName}/updateDoc`, (req, res) => updateDoc(req, res, collectionName));
	// Возвращает все документы с одинаковым значением указанного поля
	router.get(`/${collectionName}/getDocsByField`, (req, res) => getDocsByField(req, res, collectionName));
	// Находит все документы с одинаковым значением указанного поля и обновляет указанное поле в этих документах
	router.put(`/${collectionName}/updateField`, (req, res) => updateField(req, res, collectionName));
	// Удаляет документ по id
	router.post(`/${collectionName}/removeDocById`, (req, res) => removeDocById(req, res, collectionName));
	return router;
};

const getMongoCollections = (app, db, names) => {
	names.forEach((name) => {
		app.locals[name] = db.collection(name);
		app.use(getRouters(require('express').Router(), name));
	});
};

module.exports = {
	createDoc,
	updateDoc,
	updateField,
	removeDocById,
	getCollection,
	getDocById,
	getDocsByField,
	getRouters,
	getMongoCollections,
};
