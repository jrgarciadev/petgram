import React from "react"
import ReactDOM from "react-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { App } from "./App"
import Context from "./Context"

const client = new ApolloClient({
  uri: "https://petgram-api-btg7zphh1.now.sh/graphql",
  // Request, se ejecuta justo antes de hacer la petición al servidor
  request: (operation) => {
    const token = window.sessionStorage.getItem("token")
    const authorization = token ? `Bearer ${token}` : ""
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: (error) => {
    const { networkError } = error
    if (networkError && networkError.result.code === "invalid_token") {
      window.sessionStorage.removeItem("item")
      window.location.href = "/"
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
)
