const {
	createDocument,
	updateDocument,
	removeDocumentById,
	getCollection,
	getDocumentById,
} = require('../MongoCRUD/crud');
const router = require('express').Router();
router.get('/getStyles', (req, res) => getCollection(req, res, 'styles'));
router.get('/getStyleById', (req, res) => getDocumentById(req, res, 'styles'));
router.post('/createStyle', (req, res) => createDocument(req, res, 'styles', 'style'));
router.post('/updateStyle', (req, res) => updateDocument(req, res, 'styles', 'style'));
router.post('/removeStyleById', (req, res) => removeDocumentById(req, res, 'styles'));
module.exports = router;
