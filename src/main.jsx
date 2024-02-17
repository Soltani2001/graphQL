import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://graphqlzero.almansi.me/api",
  cache: new InMemoryCache()
})


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  
)
