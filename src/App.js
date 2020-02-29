import React, { useContext, Suspense } from "react"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
// import { Detail } from "./pages/Detail"
// import { User } from "./pages/User"
import { NotFound } from "./pages/NotFound"
// import { NotRegisteredUser } from "./pages/NotRegisteredUser"
import { Router, Redirect } from "@reach/router"
import { NavBar } from "./components/NavBar"
import { Context } from "./Context"

// Implementing lazy loading
const Favs = React.lazy(() => import("./pages/Favs"))
const Detail = React.lazy(() => import("./pages/Detail"))
const User = React.lazy(() => import("./pages/User"))
const NotRegisteredUser = React.lazy(() => import("./pages/NotRegisteredUser"))

// const UserLogged = ({ children }) => {
//   return children({ isAuth: false })
// }

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<h1>Cargando..</h1>}>
      <GlobalStyle />
      <Header />
      <Router>
        <NotFound default />
        <Detail path="/detail/:detailId" />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  )
}
