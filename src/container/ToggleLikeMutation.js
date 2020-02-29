/* eslint-disable react/prop-types */
import React from "react"
import { gql } from "apollo-boost"
import { Mutation } from "react-apollo"

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      likes
      liked
    }
  }
`

export const ToggleLikeMutation = ({ children }) => {
  return <Mutation mutation={LIKE_PHOTO}>{children}</Mutation>
}
