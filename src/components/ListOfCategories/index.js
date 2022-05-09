import React from "react";
import {Category} from '../Category'
import { List } from "./styles";
import { Item } from "./styles";
import db from "../../../api/db.json"

export const ListOfCategories =()=>{
  return(
    <List>{
      db.categories.map(category => <Item key={category.id}><Category {...category} /></Item> )
      }
    </List>
  )
}
