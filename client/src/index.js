import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import resolvers from "./clientResolvers";


const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  cache,
  resolvers
  
});
cache.writeData({
  data: {
    ItemType: "Folder",
    ItemId: null
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
