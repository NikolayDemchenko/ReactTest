const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    modules: [
      require("../models/Folder"),
      require("../models/Template"),
      require("../models/Instance"),
      require("../models/Template/Group"),
      require("../models/Template/Group/Element"),
    ]
  });
  server.applyMiddleware({ app, path: "/graphql" });
 const cloudURI="mongodb+srv://MainAdmin:123454321@clustermongodb-vzdz7.mongodb.net/test?retryWrites=true&w=majority"
  const localURI = "mongodb://localhost:27017/LocalMongoBase";

  await mongoose.connect(localURI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function (err) {
    if (err) throw err;
    console.log('Connected to DB!');
  });

  const port = 8000;
  app.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
  });
};
startServer();
