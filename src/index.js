

import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client' // ASÍ
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('app'))