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
app.use(bodyParser.json({ limit: "10mb" }));

router.get("/getPages", (req, res) => {
  const pages = req.app.locals.pages;
  pages
    .find({})
    .toArray()
    .then((response) => res.status(200).json(response.map((res) => res.name)))
    .catch((error) => console.error(error));
});

router.get("/getPageById", (req, res) => {
  const _id = req.query._id;
  const pages = req.app.locals.pages;
  pages
    .find({ _id: new ObjectId(_id) })
    .toArray()
    .then((response) => {
      // console.log("response", response[0]);
      res.status(200).json(response[0]);
    })
    .catch((error) => console.error(error));
});
router.get("/getApps", (req, res) => {
  const pages = req.app.locals.pages;
  pages
    .find({ domain: /\D+/i })
    .toArray()
    .then((response) => {
      res
        .status(200)
        .json(Array.from(new Set(response.map((res) => res.appName))));
    })
    .catch((error) => console.error(error));
});

app.post("/updateAppName",  (req, res) => {
  console.log("updateAppName");
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
          console.log("response :>> ", response);
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
router.get("/getPagesByAppName", (req, res) => {
  const appName = req.query.appName;
  console.log("appName :>> ", appName);
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

app.post("/createPage", (req, res) => {
  const pages = req.app.locals.pages;
  const page = JSON.parse(req.body.page);
  // delete page._id;
  console.log("createPage");
  pages.insertOne(page, (err, result) => {
    console.log("result", result.ops[0]);
    if (err) return console.log(err);
    res.send(result.ops[0]);
  });
});


app.post("/updatePage", (req, res) => {
  const pages = req.app.locals.pages;
  const page = JSON.parse(req.body.page);
  console.log("save");
  const _id = ObjectId(page._id);
  pages.findOneAndUpdate({ _id }, { $set: { ...page, _id } }, (err, result) => {
    if (err) return console.log(err);
    console.log("result", result);
    res.send(page);
  });
});

app.post("/removePageById", (req, res) => {
  const _id = req.query._id;
  console.log("removePageById!!!!", _id);
  const pages = req.app.locals.pages;

  pages
    .deleteOne({ _id: new ObjectId(_id) })
    .then(() => {
      res.send(200);
    })
    .catch((error) => console.error(error));
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
