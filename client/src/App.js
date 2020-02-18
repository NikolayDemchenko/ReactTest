import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import resolvers from "./clientResolvers";
import Window from "./Components/DataWindow/Window";

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
const App = () => {
  return (
    <ApolloProvider client={client}>
        <div className="App">
      <div className="Menu">Меню Поиск</div>
      <Window />
    </div>
  </ApolloProvider>
  );
};
export default App;
