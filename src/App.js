import React from "react"
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Logo } from "./components/Logo"
import { Home } from "./pages/Home"
import { Router } from "@reach/router"

export const App = () => {
  const queryString = window.location.search
  const urlParams = new window.URLSearchParams(queryString)
  const detailId = urlParams.get("detail")
  console.log(detailId)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:categoryId" />
        </Router>
      )}
    </div>
  )
}
