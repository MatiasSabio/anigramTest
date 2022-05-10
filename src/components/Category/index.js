import React, { useState } from 'react';
import { Anchor, Image, Div } from './styles';
import { useLocalStorage } from '../../Hooks/useLocalStorage';



const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
export const Category = ( {cover = DEFAULT_IMAGE, path, emoji = '?', id},  ) => {  
const key = id;
const [fixedCategory, setFixedCategory] = useLocalStorage( key ,false);

 return ( 
   <Anchor onClick={()=>{setFixedCategory(!fixedCategory)}}  >
    <Image fixedCategory={fixedCategory} src={cover}/>
    <Div fixedCategory={fixedCategory}>{emoji}</Div>
  </Anchor>  

)
}
