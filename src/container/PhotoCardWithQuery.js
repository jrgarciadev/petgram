/* eslint-disable react/prop-types */
import React from "react"
import { PhotoCard } from "../components/PhotoCard"
import { gql } from "apollo-boost"
// Componente especial que permitira utilizar la tecnica de render props
import { Query } from "react-apollo"

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (error) return <h1>Lo sentimos, no pudimos cargar la linda mascota</h1>
  const { photo = {} } = data || { photo: null }
  return <PhotoCard loading={loading} {...photo} />
}

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
