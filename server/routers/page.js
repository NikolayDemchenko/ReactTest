// const express = require('express');
const router = require('express').Router();
const { createDocument, updateDocument, removeDocumentById, getCollection, getDocumentById } = require('../MongoCRUD/crud');

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

router.get('/getPages', (req, res) => getCollection(req, res, 'pages'));
router.get('/getPageById', (req, res) => getDocumentById(req, res, 'pages'));
router.post('/createPage', (req, res) => createDocument(req, res, 'pages', 'page'));
router.post('/updatePage', (req, res) => updateDocument(req, res, 'pages', 'page'));
router.post('/removePageById', (req, res) => removeDocumentById(req, res, 'pages'));

module.exports = router;
