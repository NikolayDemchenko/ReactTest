const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

router.get('/getPages', (req, res) => {
	const pages = req.app.locals.pages;
	pages
		.find({})
		.toArray()
		.then((response) => res.status(200).json(response.map((res) => res.name)))
		.catch((error) => console.error(error));
});

router.get('/getPageById', (req, res) => {
	const _id = req.query._id;
	req.app.locals.pages
		.find({ _id: new ObjectId(_id) })
		.toArray()
		.then((response) => {
			// console.log("response", response[0]);
			res.status(200).json(response[0]);
		})
		.catch((error) => console.error(error));
});
router.get('/getApps', (req, res) => {
	const pages = req.app.locals.pages;
	pages
		.find({ domain: /\D+/i })
		.toArray()
		.then((response) => {
			res.status(200).json(Array.from(new Set(response.map((res) => res.appName))));
		})
		.catch((error) => console.error(error));
});

router.get('/getPagesByAppName', (req, res) => {
	const appName = req.query.appName;
	console.log('appName :>> ', appName);
	const pages = req.app.locals.pages;
	pages
		.find({ appName })
		.toArray()
		.then((response) =>
			res.status(200).json({
				pageList: response.map(({ domain, appName, name, _id }) => ({
					domain,
					appName,
					name,
					_id,
				})),
				page: response.find((res) => res.domain),
			})
		)
		.catch((error) => console.error(error));
});

router.post('/updateAppName', (req, res) => {
	console.log('updateAppName');
	const pages = req.app.locals.pages;
	const { oldName, newName } = JSON.parse(req.body.appName);
	pages.updateMany(
		{ appName: oldName }, // критерий фильтрации
		{ $set: { appName: newName } }, // параметр обновления
		() => {
			pages
				.find({ appName: newName })
				.toArray()
				.then((response) => {
					console.log('response :>> ', response);
					res.status(200).json({
						pageList: response.map(({ domain, appName, name, _id }) => ({
							domain,
							appName,
							name,
							_id,
						})),
						page: response.find((res) => res.domain),
					});
				})
				.catch((error) => console.error(error));
		}
	);
});

router.post('/createPage', (req, res) => {
	req.app.locals.pages.insertOne(JSON.parse(req.body.page), (err, result) => {
		if (err) return console.log(err);
		res.send(result.ops[0]);
	});
	console.log('createPage');
});

router.post('/updatePage', (req, res) => {
	const page = JSON.parse(req.body.page);
	const _id = ObjectId(page._id);
	req.app.locals.pages.findOneAndUpdate({ _id }, { $set: { ...page, _id } }, { returnOriginal: false }, (err, result) => {
		console.log('updatePage');
		// console.log('result', result.value);
		if (err) return console.log(err);
		res.send(result.value);
	});
});

router.post('/removePageById', (req, res) => {
	const _id = req.body._id;
	console.log('removePageById!!!!', _id);
	req.app.locals.pages
		.deleteOne({ _id: new ObjectId(_id) })
		.then(() => {
			res.send(200);
		})
		.catch((error) => console.error(error));
});
module.exports = router;
