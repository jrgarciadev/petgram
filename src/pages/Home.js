/* eslint-disable react/prop-types */
import React from "react"
import { ListOfCategories } from "../components/ListOfCategories"
import { ListOfPhotoCards } from "../container/ListOfPhotoCards"
import { Layout } from "../components/Layout"

const HomePage = ({ categoryId = 1 }) => {
  return (
    <Layout
      title="Tu App de fotos de mascotas"
      subtitle="Con Petgram puedes encontrar fotos de animales domésticos muy bonitos"
      noShowHead
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
