const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pageRouter = require('../routers/page');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));

app.use(pageRouter);

const cloudURI = 'mongodb+srv://MainAdmin:123454321@clustermongodb-vzdz7.mongodb.net/test?retryWrites=true&w=majority';
const localURI = 'mongodb://localhost:27017/LocalMongoBase';

const port = 8000;

let dbClient;
MongoClient.connect(cloudURI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	poolSize: 10,
})
	.then((client) => {
		const db = client.db('LocalMongoBase');
		dbClient = client;
		app.listen(port, () => console.info(`REST API running on port http://localhost:${port}`));
		app.locals.pages = db.collection('pages');
		app.locals.styles = db.collection('styles');
	})
	.catch((error) => console.error(error));

process.on('SIGINT', () => {
	dbClient.close();
	process.exit();
});