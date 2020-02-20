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
export const UserFormRegister = ({ error, disabled, onSubmit, onChangePage }) => {
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
        Registrate en Petgram y descubre el increible mundo de las mascotas
      </Text>
      <input disabled={disabled} placeholder="Email" {...email}></input>
      <input
        disabled={disabled}
        placeholder="Password"
        type="password"
        {...password}
      ></input>
      <Button disabled={disabled}>Registrarse</Button>
      <RegisterContainer>
        <React.Fragment>
          <Text>¿Ya tienes una cuenta?</Text>
          <Link to="#" onClick={onChangePage}>
            Inicia Sesión
          </Link>
        </React.Fragment>
      </RegisterContainer>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </Form>
  )
}
