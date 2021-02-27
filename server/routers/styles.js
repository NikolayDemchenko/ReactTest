const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();

router.get('/getStyles', (req, res) => {
	req.app.locals.styles
		.find({})
		.toArray()
		.then((response) => res.status(200).json(response.map((res) => res.name)))
		.catch((error) => console.error(error));
});

router.get('/getStyleById', (req, res) => {
	const _id = req.query._id;
	req.app.locals.styles
		.find({ _id: new ObjectId(_id) })
		.toArray()
		.then((response) => {
			// console.log("response", response[0]);
			res.status(200).json(response[0]);
		})
		.catch((error) => console.error(error));
});

router.post('/createStyle', (req, res) => {
	console.log('createStyle');
	req.app.locals.styles.insertOne(JSON.parse(req.body.style), (err, result) => {
		if (err) return console.log(err);
		res.send(result.ops[0]);
	});
});

router.post('/updateStyle', (req, res) => {
	const style = JSON.parse(req.body.style);
	const _id = ObjectId(style._id);
	req.app.locals.styles.findOneAndUpdate(
		{ _id },
		{ $set: { ...style, _id } },
		{ returnOriginal: false },
		(err, result) => {
			if (err) return console.log(err);
			res.send(result.value);
		}
	);
	console.log('updateStyle');
});

router.post('/removeStyleById', (req, res) => {
	const _id = req.body._id;
	console.log('removeStyleById!!!!', _id);
	req.app.locals.styles
		.deleteOne({ _id: new ObjectId(_id) })
		.then(() => {
			res.send(200);
		})
		.catch((error) => console.error(error));
});
module.exports = router;
