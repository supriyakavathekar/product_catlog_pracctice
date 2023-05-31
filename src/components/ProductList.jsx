import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';



function ProductList() {

    const [products, setproducts] = useState([])
    const [selectedCategory, setselectedCategory] = useState([])





    const categories = [...new Set(products.map((product) => product.category))]

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
            setproducts(data.products);
            console.log(data.products);
        })
        .catch((error) =>{
        console.log('Eroor fetcching product', error);
        })
        
    }, [])

    const handleCategorySelect = (event) => {
      setselectedCategory(event.target.value)
    }

  return (
    <div className={styles.listWrapper}>
    
    <div className={styles.controlsWrapper}>
        <label htmlFor='category'>Filter by category:</label>
        <select
          id='category'
          className={styles.inputField}
          value={selectedCategory}
          onChange={handleCategorySelect}
        >
          <option value=''>All</option>
          { categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
           ))
          }
        </select>
      </div>

<div className={styles.cardsWrapper}>
    {products
    
    .filter((product) => selectedCategory == '' || product.category === selectedCategory)
    .map((product) => (
        <ProductCard key ={product.id} product={product} />
    )

    )}
    
    
    </div>
    
    </div>
    
  )
}

export default ProductList