/* eslint-disable react/prop-types */
import React from "react"
import { Article, ImgWrapper, Img, Button } from "./styles"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useNearScreen } from "../../hooks/useNearScreen"
import ReactPlaceholder from "react-placeholder"
import { TextBlock, RectShape, RoundShape } from "react-placeholder/lib/placeholders"

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({
  id,
  loading = false,
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const photoCardSkeleton = (
    <React.Fragment>
      <RectShape color="#eee" style={{ height: "280px", marginBottom: 10 }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20
        }}
      >
        <RoundShape
          color="#eee"
          style={{ width: 50, height: 50, marginLeft: 10, marginRight: 10 }}
        />
        <TextBlock color="#eee" rows={1} style={{ width: 120 }} />
      </div>
    </React.Fragment>
  )
  return (
    <Article ref={element}>
      {show && (
        <ReactPlaceholder
          ready={!loading}
          showLoadingAnimation={true}
          customPlaceholder={photoCardSkeleton}
        >
          <React.Fragment>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size="32px" /> {likes} likes!
            </Button>
          </React.Fragment>
        </ReactPlaceholder>
      )}
    </Article>
  )
}
