/* eslint-disable react/display-name */
import React from "react"
import { FavsWithQuery } from "../container/GetFavorites"
import { Layout } from "../components/Layout"

export default () => (
  <Layout
    title="Tus mascotas favoritas"
    subtitle="Aquí puedes encontrar tus mascotas favoritas"
  >
    <FavsWithQuery />
  </Layout>
)
