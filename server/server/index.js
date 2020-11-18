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
app.use(bodyParser.json({limit: '10mb'}));


router.get("/getPages", (req, res) => {
  const pages = req.app.locals.pages;
  pages
    .find({})
    .toArray()
    .then((response) => res.status(200).json(response.map(res=>res.name)))
    .catch((error) => console.error(error));
});


app.post("/addpage", (req, res) => {
  const pages = req.app.locals.pages;
  const page = JSON.parse(req.body.page);
  delete page._id;
  // console.log(component);
  console.log("save as");
  pages.insertOne(page, (err, result) => {
    // console.log('result', result.ops[0])
    if (err) return console.log(err);
    res.send(result.ops[0]);
  });
});


app.post("/updatepage", (req, res) => {
  const pages = req.app.locals.pages;
  const page = JSON.parse(req.body.page);
  console.log("save");

  // console.log(component);
  // console.log('typeof component._id', typeof ObjectId(component._id),ObjectId(component._id))
  const _id = ObjectId(component._id);

  pages.findOneAndUpdate({ _id }, { $set: { ...page, _id } }, (err, result) => {
    if (err) return console.log(err);
    console.log("result", result);
    res.send(page);
  });
});

let dbClient;
MongoClient.connect(cloudURI, {
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
    app.locals.pages = db.collection("pages");
  })
  .catch((error) => console.error(error));

process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});
