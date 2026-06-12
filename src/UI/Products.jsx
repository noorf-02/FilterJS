import React, { useEffect, useState } from "react";

//we call the api url outside the main function so that the api loads only once and not everytime the functions
const url = "https://dummyjson.com/products";
export default function Products() {
  const [value, setValue] = useState([]);
  async function callApi() {
    const apiData = await fetch(url);
    const res = await apiData.json();
    setValue(res.products);
  }

  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    console.log(value);
  }, [value]);

  function allProducts() {
    setValue(value);
  }

  function filterBeauty() {
    let beauty = value.filter((fProduct) => fProduct.category == "beauty");
    setValue(beauty);
    console.log(beauty);
  }

  function filterGroceries() {
    let groceries = value.filter(
      (fProduct) => fProduct.category == "groceries");
    setValue(groceries);
    console.log(groceries)
  }

  function filteredFragrances() {
    let fragrances = value.filter(
      (fProduct) => fProduct.category == "fragrances");
      setValue(fragrances)
  }

  function filteredFurniture() {
    let furniture = value.filter(
      (fProduct) => fProduct.category == "furniture");
      setValue(furniture)
  }

  return (
    <>
      <section className="bg-indigo-500">
        <nav className="wrapper text-white flex items-center justify-between">
          <div className="logo text-2xl">Products = {value.length}</div>
          <div className="btns flex gap-2">
            <button
              className="border-1 py-1 px-3 rounded-2xl hover:bg-indigo-400 cursor-pointer"
              onClick={allProducts}
            >
              All
            </button>
            <button
              className="border-1 py-1 px-3 rounded-2xl hover:bg-indigo-400 cursor-pointer"
              onClick={filterBeauty}
            >
              Beauty
            </button>
            <button
              className="border-1 py-1 px-3 rounded-2xl hover:bg-indigo-400 cursor-pointer"
              onClick={filteredFragrances}
            >
              Fragrances
            </button>
            <button
              className="border-1 py-1 px-3 rounded-2xl hover:bg-indigo-400 cursor-pointer"
              onClick={filterGroceries}
            >
              Groceries
            </button>
            <button
              className="border-1 py-1 px-3 rounded-2xl hover:bg-indigo-400 cursor-pointer"
              onClick={filteredFurniture}
            >
              Furniture
            </button>
          </div>
        </nav>
      </section>

      {/* when we use the map to fetch all the desired content from the api, the map will run as many times as the number of products present. Map is essentially a function 
when we write the pure js after the return then we have to use the curly brackets */}

      <section className="api-cards wrapper flex flex-wrap justify-center gap-5">
        {value.map((myProducts) => {
          console.log(myProducts);

          return (
            <div className="card sm:w-[350px] w-[300px] border-[0.1px] border-gray-200 p-5 rounded-2xl">
              <img
                src={myProducts.images}
                alt=""
                className="w-[200px] block m-auto"
              />
              <p className="font-bold text-[18px]">{myProducts.title}</p>
              <p className="text-[14px] font-light">{myProducts.description}</p>
              <div className="price flex justify-between">
                <p className="text-green-800">{myProducts.price}$</p>
                <p className="text-orange-800">{myProducts.rating}</p>
              </div>
              <p className="text-[12px] font-light italic">
                {myProducts.category}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
}
