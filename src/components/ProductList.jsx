import React, { useEffect, useState } from 'react';
import ProductCard  from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [ products, setProducts ] = useState([]);
  const [ selectedCategory, setSelectedCategory ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
const [sortDirection, setSortDirection] = useState('asc')
const [sortedProducts, setSortedProducts] = useState(products)
const [searchQuery, setsearchQuery] = useState('')




  const categories = [...new Set(products.map((product) => product.category))];
  const limit = 30;
  const handleCategorySelect = (event) => {
    setSelectedCategory(event.target.value);
  };

function handelsort() {
  const direction = sortDirection === 'asc' ? 'desc' : 'asc';
  setSortDirection(direction);

  const sorted = products.slice().sort((a,b)=> {
   
    if (direction === 'asc') {
      return a.price - b.price;
    } else{
      return b.price - a.price
    };

  })
  setSortedProducts(sorted);

}
  




  const fetchMoreProducts = async (limit, currentPage) => {
    try {
      setCurrentPage(currentPage + 1);
      if (currentPage > 3) {
        alert('No more products to load');
        return;
      }
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${currentPage * limit}`);
      const data = await response.json();
      setProducts([...products, ...data.products]);
      setSortedProducts([...sortedProducts,...data.products]);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setSortedProducts(data.products)
        console.log(data.products);
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
      });
  }, []);
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
          <option value=''>Select category</option>
          { categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
           ))
          }
        </select>

        <label>Sort by price: </label>
        <button onClick={handelsort}
        className=  {`${styles.sortBtn} actionBtn`} >
        {sortDirection === 'asc' ? 'Low to high' : 'High to low'}
        {/* if sort direcction is ascending then text on the button is low to high otherwise its high to low */}
        </button>

        <input type="text" placeholder='Search...' className={styles.inputField} value={searchQuery}
        // value mhanje apan je type karu search madhe te .. so te searchqurey mhanun usestate madhe define kelay apan
        onChange={(e) => setsearchQuery(e.target.value)}
        // on change mhanje on click sarkha .. jas button sathi on click asta tasa input sathi on change asata
        // 
        />


      </div>
      <div className={styles.cardsWrapper}>
        { searchQuery !== '' ?
         sortedProducts
         .filter((product) => 
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
         )
         .map((product) => (
          <ProductCard key={product.id} product={product}/>
         ))
        :
        sortedProducts
          .filter((product) => selectedCategory == '' || product.category === selectedCategory)
          .map((product) => (
            <ProductCard key={ product.id } product={ product } />
          ))
        }
      </div>
      <button
        className={styles.actionBtn}
        onClick={() => fetchMoreProducts(limit, currentPage)}
        disabled={currentPage > 3}
      >
        Load more...
      </button>
    </div>
  );
}

export default ProductList