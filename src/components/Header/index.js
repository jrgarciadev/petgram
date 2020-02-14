import React from "react"
import { Logo } from "../Logo"
import { HeaderContainer } from "./styles"
import { MdCameraAlt, MdComment } from "react-icons/md"
const SIZE = "32px"
export const Header = () => {
  return (
    <HeaderContainer>
      <MdCameraAlt size={SIZE} />
      <Logo />
      <MdComment size={SIZE} />
    </HeaderContainer>
  )
}
