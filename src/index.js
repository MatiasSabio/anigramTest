//DEPENDECIES
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
//COMPONENTS
import { App } from './app';


const root = ReactDOM.createRoot(document.getElementById('app'));
const client = new ApolloClient({
  uri: 'https://petgram-backend-one.now.sh/graphql',
  cache: new InMemoryCache()
})
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>  
  )
// root.render(<App />);
