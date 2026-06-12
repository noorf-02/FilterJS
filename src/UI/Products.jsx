import React, { useEffect, useState } from 'react'


//we call the api url outside the main function so that the api loads only once and not everytime the functions
const url = "https://dummyjson.com/products"
export default function Products() {
    const [ value, setValue ] = useState([]);
    async function callApi () {
        const apiData = await fetch(url);
        const res = await apiData.json();
        setValue(res.products);
    }

    useEffect(()=>
    {
        callApi();
    },[])

    useEffect(()=>{
        console.log(value)
    },[value])


  return (
    <div>
    
    </div>
  )
}
