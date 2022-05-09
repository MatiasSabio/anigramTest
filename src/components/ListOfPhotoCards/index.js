import React from "react";
import {PhotoCard} from '../PhotoCard'
import { List } from "./styles";
import { Item } from "./styles";
import db from "../../../api/db.json"

export const ListOfPhotoCards =()=>{
  const photos= db.photos
  return(
    <List>{
      photos.map(photo => <Item key={photo.id}><PhotoCard {...photo} /></Item> )
      }
    </List>
  )
}
