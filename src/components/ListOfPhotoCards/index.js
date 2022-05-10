//DEPENDECIES
import React from "react";
import { useQuery } from "@apollo/client";
//COMPONENTS
import { whitPhotos } from "../../hoc/whitPhotos";
import {PhotoCard} from '../PhotoCard'
import { List } from "./styles";
import { Item } from "./styles";




export const ListOfPhotoCards =({categoryId})=>{
  const { loading, error, data = { photos: [] } } = useQuery(whitPhotos, {
    variables: { categoryId: categoryId }
  })  
  //destruncturing de data loading y
  if (error) {
    return <h2>{error.message}</h2>
  }
  if (loading) {
    return <h2>Loading...</h2>
  }

  const photos= data.photos
  return(
    
    <List>{
      photos.map(photo => <Item key={photo.id}><PhotoCard {...photo}  /></Item> )
      }
    </List>
  )
}


