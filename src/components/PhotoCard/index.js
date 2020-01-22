import React from "react"
import { ImgWrapper, Img, Button } from "./styles"
import { MdFavoriteBorder } from "react-icons/md"

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1500879747858-bb1845b61beb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// eslint-disable-next-line react/prop-types
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} />
      </ImgWrapper>
    </a>
    <Button>
      <MdFavoriteBorder size="24px" /> {likes} likes!
    </Button>
  </article>
)
