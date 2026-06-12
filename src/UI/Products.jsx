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
<>

    <section className='bg-indigo-500'>
        <nav className='wrapper text-white flex items-center'>
         <div className="logo">
            Products
         </div>
         <div className="btns">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
         </div>
        </nav>
    
    </section>

{/* when we use the map to fetch all the desired content from the api, the map will run as many times as the number of products present. Map is essentially a function 
when we write the pure js after the return then we have to use the curly brackets */}


    <section className='api-cards wrapper flex flex-wrap justify-between gap-5'>
        {
           value.map((myProducts)=>{
            console.log(myProducts)
            
            return(
                    <div className='card w-[350px] border-[0.5px] p-5 rounded-2xl'>
                        <img src={myProducts.images} alt="" className='w-[200px] block m-auto'/>
                        <p className='font-bold text-[20px]'>{myProducts.title}</p>
                        <p className='text-[15px] font-light'>{myProducts.description}</p>
                        <div className="price flex justify-between">
                            <p className='text-green-800'>{myProducts.price}$</p>
                            <p className='text-orange-800'>{myProducts.rating}</p>
                        </div>
                        <p className='text-[12px] font-light italic'>{myProducts.category}</p>
                    </div>
            )
           })
        }
    </section>

    </>
  )
}
