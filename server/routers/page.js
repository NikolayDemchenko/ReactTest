const router = require('../MongoCRUD/crud').getBaseRouter(require('express').Router(), 'pages');

router.get('/getApps', (req, res) => {
	req.app.locals.pages
		.find({ domain: /\D+/i })
		.toArray()
		.then((response) => {
			res.status(200).json(Array.from(new Set(response.map((res) => res.appName))));
		})
		.catch((error) => console.error(error));
});
module.exports = router;
