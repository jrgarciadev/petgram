/* eslint-disable react/prop-types */
import React from "react"
import Lottie from "react-lottie"
import { useInputValue } from "../../hooks/useInputValue"
import * as dogAnimationData from "../../../assets/dog.json"
import { Form, Button, Text, RegisterContainer, Link } from "./styles"

const dogAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: dogAnimationData.default
}
export const UserForm = ({ onSubmit }) => {
  const email = useInputValue("")
  const password = useInputValue("")

  return (
    <Form onSubmit={onSubmit}>
      <Lottie options={dogAnimationOptions} height={200} width={300} />
      <Text>
        Inicia sesíon con tu cuenta de Petgram y descubre el increible mundo de las
        mascotas
      </Text>
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
      <Button>Iniciar Sesión</Button>
      <RegisterContainer>
        <Text>¿No tienes una cuenta?</Text>
        <Link to="#">Registrate</Link>
      </RegisterContainer>
    </Form>
  )
}
