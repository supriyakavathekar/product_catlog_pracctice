import React from 'react'

function ProductCard({product}) {
  return (
  <>
  
  <div>
    {/* <img src={ product.images[0]} alt= { product.title} /> */}
  </div>

  <div>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <p>Category: {product.category}</p>
    <p>Brand: {product.brand}</p>
    <p>Price: EUR {product.price}</p>
  </div>
  <button>Details</button>
  
  </>
  )
}

export default ProductCard