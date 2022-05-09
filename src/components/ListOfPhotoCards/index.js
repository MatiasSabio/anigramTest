import React from "react";
import {PhotoCard} from '../PhotoCard'
import { List } from "./styles";
import { Item } from "./styles";
import db from "../../../api/db.json"

export const ListOfPhotoCards =()=>{
  return(
    <List>{
      [1,2,3,4,5].map(id => <Item key={id}><PhotoCard /></Item> )
      }
    </List>
  )
}
