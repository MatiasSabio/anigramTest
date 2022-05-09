import React , {useEffect, useState, useRef} from "react";
// import URL from '../.env'
import db from '../../api/db.json'
const URL = 'falta'

export const getCategories =()=>{
  const mockCategories = db.categories  
  const [categories, setCategories] = useState([...mockCategories])
  const [loading, setLoading] = useState(false)
  
  //   useEffect(()=>{
  //     setLoading(true)
  // window.fetch(URL)
  //   .then(res=>res.json())
  //   .then(response=>setCategories(response))
  //   setLoading(false)
  //   },[])

    return {categories, loading}

}
export const LazyDazy =()=>{
  const element = useRef(null);
  const [show, setShow ] = useState(false)
  useEffect(()=>{
   const observer = new window.IntersectionObserver((entries)=>{ 
     const {isIntersecting}  = entries[0];
     console.log(isIntersecting);
     if (isIntersecting) {
       setShow(true)
       observer.disconnect()
     }
    })
    observer.observe(element.current)
  },[element])
  return {element, show}
}
