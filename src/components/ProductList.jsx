import React, { userEffect, useState } from 'react'

function ProductList() {

const [products, setproducts] = useState([])

function userEffecct() {
    fetch('https://dummyjson/products')
    .then((data) => {
        setproducts(data.products);
        console.log(data.products);
    }
    )
    .catch((error) =>{
       console.log('Eroor fetcching product', error);
    }

    )
    
}

  return (
    <div><h1>Product List</h1></div>
  )
}

export default ProductList