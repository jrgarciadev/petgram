/* eslint-disable react/prop-types */
import React from "react"
import { PhotoCard } from "../PhotoCard"

export const ListOfPhotoCardsComponent = ({
  data: { photos = [], loading = false }
} = {}) => {
  console.log(loading)
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} loading={loading} />
      ))}
    </ul>
  )
}
