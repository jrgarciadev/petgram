import { graphql } from "react-apollo"
// Gql permite hacer la queries como si fuese un string para que lo entienda apollo
import { gql } from "apollo-boost"

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const withPhotos = graphql(GET_PHOTOS)
