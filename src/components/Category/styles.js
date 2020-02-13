import styled, { keyframes } from "styled-components"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { Link as LinkRouter } from "@reach/router"

export const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled(AiOutlineLoading3Quarters)`
  color: #000;
  margin: 0 auto;
  animation: ${rotate} 2s linear infinite;
`

export const Image = styled.img`
  box-sizing: border-box;
  border: 3px solid #eee;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
  width: 75px;
  height: 75px;
  margin-bottom: 5px;
  background-color: #ddd;
`
