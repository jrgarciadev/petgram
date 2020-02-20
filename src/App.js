import React from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"
import { Favs } from "./pages/Favs"
import { User } from "./pages/User"
import { NotRegisteredUser } from "./pages/NotRegisteredUser"
import { Router } from "@reach/router"
import { NavBar } from "./components/NavBar"
import Context from "./Context"

// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Router>
        <Detail path="/detail/:detailId" />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
}
