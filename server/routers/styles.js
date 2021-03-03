const {
	createDoc,
	updateDoc,
	removeDocumentById,
	getCollection,
	getDocById,
} = require('../MongoCRUD/crud');
const router = require('express').Router();
router.get('/getStyles', (req, res) => getCollection(req, res, 'styles'));
router.get('/getStyleById', (req, res) => getDocById(req, res, 'styles'));
router.post('/createStyle', (req, res) => createDoc(req, res, 'styles', 'style'));
router.post('/updateStyle', (req, res) => updateDoc(req, res, 'styles', 'style'));
router.post('/removeStyleById', (req, res) => removeDocumentById(req, res, 'styles'));
module.exports = router;
