import React from "react"
import ReactDOM from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { App } from "./App"

const client = new ApolloClient({
  uri: "https://petgram-api-btg7zphh1.now.sh/graphql"
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
)
