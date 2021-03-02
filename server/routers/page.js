const router = require('express').Router();
const {
	createDocument,
	updateDocument,
	removeDocumentById,
	getCollection,
	getDocumentById,
	updateField,
	getDocsByField,
} = require('../MongoCRUD/crud');

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

router.get('/getPages', (req, res) => getCollection(req, res, 'pages'));
router.get('/getPageById', (req, res) => getDocumentById(req, res, 'pages'));
router.get('/getPagesByAppName', (req, res) => getDocsByField(req, res, 'pages'));
router.post('/createPage', (req, res) => createDocument(req, res, 'pages', 'page'));
router.post('/updatePage', (req, res) => updateDocument(req, res, 'pages', 'page'));
router.put('/updateAppName', (req, res) => updateField(req, res, 'pages'));
router.post('/removePageById', (req, res) => removeDocumentById(req, res, 'pages'));

module.exports = router;
