import React , {useEffect, useState, Fragment}from "react";
import {Category} from '../Category'
import { List, Item } from "./styles";
import { getCategories } from "../../Hooks/CustomHooks";

export const ListOfCategories =()=>{
  const [showFixed, setShowFixed]=useState(false)
  const {categories, loading} = getCategories()
useEffect(()=>{
  const onScroll =(e)=>{
    const newShowFixed = window.scrollY > 250
    showFixed !== newShowFixed && setShowFixed(newShowFixed)
  }
  document.addEventListener('scroll', onScroll)
  return () => document.removeEventListener('scroll', onScroll)
})
const rederListCategories = (fixed)=>{  
  return (loading?<Item key={loading}>
    <Category/>
  </Item>
  : <List fixed={fixed}>{
    categories.map(category => <Item key={category.id}><Category {...category}     /></Item> )
    }
  </List>)
}
 

  return(
    <Fragment>
      {rederListCategories(false)}
      {showFixed && rederListCategories(true)}
    </Fragment>
      
    )
}
