const { ObjectId } = require('mongodb');
const createDocument = (req, res, collectionName, docName) => {
	req.app.locals[collectionName].insertOne(JSON.parse(req.body[docName]), (err, result) => {
		if (err) return console.log(err);
		res.send(result.ops[0]);
	});
	console.log(`create ${docName}`);
};

const updateDocument = (req, res, collectionName, docName) => {
	const document = JSON.parse(req.body[docName]);
	const _id = ObjectId(document._id);
	req.app.locals[collectionName].findOneAndUpdate(
		{ _id },
		{ $set: { ...document, _id } },
		{ returnOriginal: false },
		(err, result) => {
			if (err) return console.log(err);
			res.send(result.value);
			console.log(`update ${docName}`);
		}
	);
};

const removeDocumentById = (req, res, collectionName) => {
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
		.then((response) => res.status(200).json(response.map(({ _id, name }) => ({ _id, name }))))
		.catch((error) => console.error(error));
};

const getDocumentById = (req, res, collectionName) => {
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

module.exports = { createDocument, updateDocument, removeDocumentById, getCollection, getDocumentById };
