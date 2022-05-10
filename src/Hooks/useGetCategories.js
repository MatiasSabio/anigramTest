import React , {useEffect, useState} from "react";
// import URL from '../.env'
import db from '../../api/db.json'
const URL = 'falta'

export const useGetCategories =()=>{
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

