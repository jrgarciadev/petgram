/* eslint-disable react/prop-types */
import React from "react"
import { Article, ImgWrapper, Img } from "./styles"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { useNearScreen } from "../../hooks/useNearScreen"
import ReactPlaceholder from "react-placeholder"
import { TextBlock, RectShape, RoundShape } from "react-placeholder/lib/placeholders"
import { FavButton } from "../FavButton"
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation"

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
            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  !liked &&
                    toggleLike({
                      variables: {
                        input: { id }
                      }
                    }) // If not liked the photo
                  setLiked(!liked)
                }
                return (
                  <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                )
              }}
            </ToggleLikeMutation>
          </React.Fragment>
        </ReactPlaceholder>
      )}
    </Article>
  )
}
