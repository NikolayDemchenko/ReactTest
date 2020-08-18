const express = require("express");
const cors = require("cors");
const router = express.Router();
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const app = express();
app.use(cors());
app.use("/", router);

const cloudURI =
  "mongodb+srv://MainAdmin:123454321@clustermongodb-vzdz7.mongodb.net/test?retryWrites=true&w=majority";
const localURI = "mongodb://localhost:27017/LocalMongoBase";

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/", (req, res) => {
  const components = req.app.locals.components;
  components
    .find({})
    .toArray()
    .then((response) => res.status(200).json(response))
    .catch((error) => console.error(error));
});

app.post("/components", (req, res) => {
  const components = req.app.locals.components;
  const component = JSON.parse(req.body.component);
  console.log(component);
  components.insertOne(component, (err, result) => {
    if (err) return console.log(err);
    res.send(component);
  });
});

let dbClient;
MongoClient.connect(localURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  poolSize: 10,
})
  .then((client) => {
    const db = client.db("LocalMongoBase");
    dbClient = client;
    app.listen(port, () =>
      console.info(`REST API running on port http://localhost:${port}`)
    );
    app.locals.elements = db.collection("elements");
    app.locals.components = db.collection("components");
    app.locals.styles = db.collection("styles");
  })
  .catch((error) => console.error(error));

process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
