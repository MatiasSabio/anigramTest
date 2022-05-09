import React , {useState}from "react";
import {Category} from '../Category'
import { List } from "./styles";
import { Item } from "./styles";
import db from "../../../api/db.json"

export const ListOfCategories =()=>{
  const mockCategories = db.categories
  const [categories, setCategories] = useState([...mockCategories])
  return(
    <List>{
      categories.map(category => <Item key={category.id}><Category {...category} /></Item> )
      }
    </List>
  )
}
