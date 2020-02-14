import React from "react"
import { Logo } from "../Logo"
import { HeaderContainer } from "./styles"
import { MdCameraAlt, MdComment } from "react-icons/md"
const SIZE = "28px"
export const Header = () => {
  return (
    <HeaderContainer>
      <MdCameraAlt color={"#888"} size={SIZE} />
      <Logo />
      <MdComment color={"#888"} size={SIZE} />
    </HeaderContainer>
  )
}
