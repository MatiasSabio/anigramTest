import React, { useState } from 'react';
import { Anchor } from './styles';
import { Image } from './styles';
import { Div } from './styles';


const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
export const Category = ( {cover = DEFAULT_IMAGE, path, emoji = '?'} ) => {  
const state = useState;
const [fixedCategory, setFixedCategory] = state(false);
 return ( 
   <Anchor onClick={()=>{setFixedCategory(!fixedCategory)}}  >
    <Image className={fixedCategory? 'fixedCategory': ''} src={cover}/>
    <Div className={fixedCategory? 'fixedCategory': ''}>{emoji}</Div>
  </Anchor>  

)
}
