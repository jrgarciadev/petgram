import React from "react"
import { Category } from "../Category"
import { List, Item } from "./styles"
import { categories } from "../../../api/db.json"

export const ListOfCategories = () => {
  return (
    <List>
      {categories.map((category, index) => (
        <Item key={index}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
