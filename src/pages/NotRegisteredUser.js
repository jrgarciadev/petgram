import React, { Fragment, useState } from "react"
import Context from "../Context"
import { UserFormLogin } from "../components/UserForm/login"
import { UserFormRegister } from "../components/UserForm/register"
import { RegisterMutation } from "../container/RegisterMutation"
import { LoginMutation } from "../container/LoginMutation"

export const NotRegisteredUser = () => {
  const [page, setPage] = useState("login")

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <Fragment>
            {page === "register" ? (
              <RegisterMutation>
                {(register, { loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activateAuth)
                  }

                  const errorMsg =
                    error && "El usuario ya existe intenta con otro email"

                  return (
                    <UserFormRegister
                      error={errorMsg}
                      disabled={loading}
                      onChangePage={() =>
                        setPage(page === "login" ? "register" : "login")
                      }
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
                    login({ variables }).then(activateAuth)
                  }

                  const errorMsg =
                    error &&
                    "Los datos ingresados no coinciden con nuestros registros"

                  return (
                    <UserFormLogin
                      error={errorMsg}
                      disabled={loading}
                      onChangePage={() =>
                        setPage(page === "login" ? "register" : "login")
                      }
                      onSubmit={onSubmit}
                    />
                  )
                }}
              </LoginMutation>
            )}
          </Fragment>
        )
      }}
    </Context.Consumer>
  )
}
