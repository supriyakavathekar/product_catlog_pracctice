import React from "react";
import styles from './ProductCard.module.css';
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();
  function openProductPage() {
    navigate(`/products/${product.id}` , {state: {product}})
  }



  return (
    <>
      {/* What we do here in class */}
      <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}
         style={{backgroundImage: `url(${product.images[0]})`}} >
          {/* <img src={product.images[0]} alt={product.title} /> */}

        </div>

        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: EUR {product.price}</p>
        </div>
        <button className= {`${styles.detailBtn} actionBtn`}  
        onClick={openProductPage}
        
        >Details</button>
      </div>
    </>
  );
}

export default ProductCard;
