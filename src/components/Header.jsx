import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={`${styles.nav} main`} >

    <Link to="/products" >Our Catalouge</Link>
    <Link to="/contact" >Contact Us</Link>


    </div>
  )
}

export default Header