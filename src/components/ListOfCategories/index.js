import React, { useState, useEffect } from "react"
import { Category } from "../Category"
import { List, Item } from "./styles"

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://petgram-api-btg7zphh1.now.sh/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener("scroll", onScroll)
    // Evitar el memory leak
    return () => document.removeEventListener("scroll", onScroll)
  })

  const renderList = (fixed, loading) => (
    <List fixed={fixed}>
      {categories.map((category, index) => (
        <Item key={index}>
          <Category {...category} loading={loading} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )

  return (
    <React.Fragment>
      {renderList(false, loading)}
      {showFixed && renderList(true, loading)}
    </React.Fragment>
  )
}

// React memo evita que el component no se redenrice de nuevo si las props no cambian
export const ListOfCategories = React.memo(ListOfCategoriesComponent)
