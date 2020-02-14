/* eslint-disable react/prop-types */
import React from "react"
import { useInputValue } from "../../hooks/useInputValue"

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue("")
  const password = useInputValue("")

  return (
    <form onSubmit={}>
      <input
        placeholder="Email"



        {...email}
        // value={email.value}
        // onChange={email.onChange}
      ></input>
      <input
        placeholder="Password"
        type="password"
        {...password}
        // value={password.value}
        // onChange={password.onChange}
      ></input>
      <button>Iniciar Sesión</button>
    </form>
  )
}
