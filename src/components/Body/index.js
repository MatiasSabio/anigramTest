import React from 'react';
import { ListOfCategories } from '../ListOfCategories';
import { ListOfPhotoCards } from '../ListOfPhotoCards';
import { BodyDiv } from './styles';

export const Body = () => ( 
  <BodyDiv>
    <ListOfCategories/> 
    <ListOfPhotoCards categoryId={3}/>
   </BodyDiv>
)
