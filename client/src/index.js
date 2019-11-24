import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import {gql} from "apollo-boost";

const cache = new InMemoryCache();
const client = new ApolloClient({ uri: 'http://localhost:8000/graphql',cache });

// const GET_FOLDERS = gql`
// {
//   folders{
//     id
//     name 
//     parentId
//     folders{
//       name
//     }
//   }
// }
// `;
// const GetItems = (query) => {
//     return client
//         .query({
//             query
//         })
// }
// GetItems(GET_FOLDERS).then(res => console.log(res.data))

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));
serviceWorker.unregister();
