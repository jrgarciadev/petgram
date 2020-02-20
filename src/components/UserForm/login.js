/* eslint-disable react/prop-types */
import React from "react"
import Lottie from "react-lottie"
import { useInputValue } from "../../hooks/useInputValue"
import * as dogAnimationData from "../../../assets/dog.json"
import { Form, Button, Text, RegisterContainer, Link, ErrorMsg } from "./styles"

const dogAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: dogAnimationData.default
}
export const UserFormLogin = ({ error, disabled, onSubmit, onChangePage }) => {
  const email = useInputValue("")
  const password = useInputValue("")

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Form disabled={disabled} onSubmit={handleSubmit}>
      <Lottie options={dogAnimationOptions} height={200} width={300} />
      <Text>
        Inicia sesíon con tu cuenta de Petgram y descubre el increible mundo de las
        mascotas
      </Text>
      <input
        disabled={disabled}
        placeholder="Email"
        {...email}
        // value={email.value}
        // onChange={email.onChange}
      ></input>
      <input
        disabled={disabled}
        placeholder="Password"
        type="password"
        {...password}
        // value={password.value}
        // onChange={password.onChange}
      ></input>
      <Button disabled={disabled}>Iniciar Sesión</Button>
      <RegisterContainer>
        <React.Fragment>
          <Text>¿No tienes una cuenta?</Text>
          <Link to="#" onClick={onChangePage}>
            Registrate
          </Link>
        </React.Fragment>
      </RegisterContainer>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Form>
  )
}
