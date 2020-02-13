/* eslint-disable react/prop-types */
import React from "react"
import { Link, Image } from "./styles"
import Skeleton from "react-skeleton-loader"

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg"

// eslint-disable-next-line react/prop-types
export const Category = ({
  cover = DEFAULT_IMAGE,
  path = "#",
  emoji = "?",
  loading = true
}) => (
  <Link to={path}>
    {loading ? (
      <Skeleton width="75px" height="75px" borderRadius="37.5%" />
    ) : (
      <Image src={cover} />
    )}
    {emoji}
  </Link>
)
