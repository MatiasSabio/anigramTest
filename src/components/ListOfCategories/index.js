import React , {useEffect, useState, Fragment}from "react";
import {Category} from '../Category'
import { List } from "./styles";
import { Item } from "./styles";
import db from "../../../api/db.json"


export const ListOfCategories =()=>{
  const mockCategories = db.categories
  const [categories, setCategories] = useState([...mockCategories])
//   useEffect(()=>{
// window.fetch('')
//   .then(res=>res.json())
//   .then(response=>setCategories(response))
//   },[])
// cover={...category.cover} path={category.path} emogi={category.emogi} 
const rederListCategories = (fixed)=>{
 return( <List className={ fixed? 'fixed': ''}>{
    categories.map(category => <Item key={category.id}><Category {...category}     /></Item> )
    }
  </List>)
}

  return(
    <Fragment>
      {rederListCategories(false)}
      { rederListCategories(true)}
    </Fragment>
      
    )
}
