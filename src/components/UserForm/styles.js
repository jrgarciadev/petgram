import styled from "styled-components"
import { Link as LinkRouter } from "@reach/router"

export const Text = styled.form`
  color: #262626;
  font-size: 12px;
  text-align: center;
  margin: 20px 5px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 10px 30px;
`

export const Button = styled.button`
  background: #3897f0;
  border: 1px solid transparent;
  padding: 10px 20px;
  border-radius: 3px;
  margin: 20px 0;
  color: white;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  &[disabled] {
    opacity: 0.3;
  }
`

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Link = styled(LinkRouter)`
  font-size: 14px;
  color: #3897f0;
  font-weight: 500;
  text-decoration: none;
`

export const ErrorMsg = styled.span`
  display: flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  bottom: 60px;
  left: 10px;
  height: 40px;
  right: 10px;
  border-radius: 3px;
  background-color: #ed4a6b;
  color: white;
  font-size: 14px;
`
