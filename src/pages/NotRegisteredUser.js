/* eslint-disable react/display-name */
import React, { Fragment, useState, useContext } from "react"
import { Context } from "../Context"
import { UserFormLogin } from "../components/UserForm/login"
import { UserFormRegister } from "../components/UserForm/register"
import { RegisterMutation } from "../container/RegisterMutation"
import { LoginMutation } from "../container/LoginMutation"

export default () => {
  const [page, setPage] = useState("login")
  const { activateAuth } = useContext(Context)
  return (
    <Fragment>
      {page === "register" ? (
        <RegisterMutation>
          {(register, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }

            const errorMsg = error && "El usuario ya existe intenta con otro email"

            return (
              <UserFormRegister
                error={errorMsg}
                disabled={loading}
                onChangePage={() => setPage(page === "login" ? "register" : "login")}
                onSubmit={onSubmit}
              />
            )
          }}
        </RegisterMutation>
      ) : (
        <LoginMutation>
          {(login, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }

            const errorMsg =
              error && "Los datos ingresados no coinciden con nuestros registros"

            return (
              <UserFormLogin
                error={errorMsg}
                disabled={loading}
                onChangePage={() => setPage(page === "login" ? "register" : "login")}
                onSubmit={onSubmit}
              />
            )
          }}
        </LoginMutation>
      )}
    </Fragment>
  )
}
