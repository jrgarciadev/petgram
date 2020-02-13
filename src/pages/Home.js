/* eslint-disable react/prop-types */
import React, { Fragment } from "react"
import { ListOfCategories } from "../components/ListOfCategories"
import { ListOfPhotoCards } from "../container/ListOfPhotoCards"

export const Home = ({ categoryId = 1 }) => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Fragment>
  )
}
