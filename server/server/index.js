const express = require("express");
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require('mongodb').ObjectId;

const app = express();
app.use(cors());
app.use("/", router);

const cloudURI =
  "mongodb+srv://MainAdmin:123454321@clustermongodb-vzdz7.mongodb.net/test?retryWrites=true&w=majority";
const localURI = "mongodb://localhost:27017/LocalMongoBase";

const port = 8000;

router.get("/", (req, res) => {
  const elements = req.app.locals.elements;
  elements
    .find({})
    .toArray()
    .then((response) => res.status(200).json(response))
    .catch((error) => console.error(error)); 
});

// app.get("/:id", (req, res) => {
//   const collection = req.app.locals.collection;
//   const id = new ObjectId(req.params.id);
//   collection
//     .findOne({ _id: id })
//     .then((response) => res.status(200).json(response))
//     .catch((error) => console.error(error));
// });
let dbClient;
MongoClient.connect(localURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
  poolSize: 10,
})
  .then((client) => {
    const db = client.db("LocalMongoBase");  
    dbClient = client;
    app.listen(port, () => console.info(`REST API running on port http://localhost:${port}`));
    app.locals.elements = db.collection("elements");
    app.locals.folders = db.collection("folders");
  })
  .catch((error) => console.error(error));

  process.on('SIGINT', () => {
    dbClient.close();
    process.exit();
  });