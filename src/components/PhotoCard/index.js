/* eslint-disable react/prop-types */
import React from "react"
import { Article, ImgWrapper, Img } from "./styles"
import { useNearScreen } from "../../hooks/useNearScreen"
import ReactPlaceholder from "react-placeholder"
import { TextBlock, RectShape, RoundShape } from "react-placeholder/lib/placeholders"
import { FavButton } from "../FavButton"
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation"
import { Link } from "@reach/router"
import PropTypes from "prop-types"

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({
  id,
  loading = false,
  liked,
  likes = 0,
  src = DEFAULT_IMAGE
}) => {
  const [show, element] = useNearScreen()
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
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {(toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
