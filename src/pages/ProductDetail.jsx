import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './ProductDeatilsPage.module.css'

function ProductDetail() {

const location = useLocation()
const product = location.state.product;
// console.log(location);

const navigate = useNavigate()
function goBack() {
  navigate('/products')
}


  return (
    <div className="main product-page">
      <h1>{product.title}</h1>
      <div>
        <img src={product.images[0]} alt={product.title} />
      </div>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: EUR {product.price}</p>
      <button
        className={styles.backBtn}
        onClick={goBack}
      >
        Back
      </button>
      <button
        className="actionBtn"
        onClick={()=> alert(`${product.title} succcesfully added to the caer`)}
      >
        Buy now
      </button>
    </div>
  )
}

export default ProductDetail