import React, { useState } from 'react';
import { Anchor, Image, Div } from './styles';



const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
export const Category = ( {cover = DEFAULT_IMAGE, path, emoji = '?'} ) => {  
const state = useState;
const [fixedCategory, setFixedCategory] = state(false);
 return ( 
   <Anchor onClick={()=>{setFixedCategory(!fixedCategory)}}  >
    <Image fixedCategory={fixedCategory} src={cover}/>
    <Div fixedCategory={fixedCategory}>{emoji}</Div>
  </Anchor>  

)
}
