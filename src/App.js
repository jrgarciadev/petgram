import React from "react"
import { ListOfCategories } from "./components/ListOfCategories"
import { ListOfPhotoCards } from "./container/ListOfPhotoCards"
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Logo } from "./components/Logo"

export const App = () => {
  const queryString = window.location.search
  const urlParams = new window.URLSearchParams(queryString)
  const detailId = urlParams.get("detail")
  console.log(detailId)
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <React.Fragment>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </React.Fragment>
      )}
    </div>
  )
}
