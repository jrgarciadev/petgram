import React from "react"
import { Anchor, Image } from "./styles"

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg"

// eslint-disable-next-line react/prop-types
export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href={path}>
    <Image src={cover} />
    {emoji}
  </Anchor>
)
