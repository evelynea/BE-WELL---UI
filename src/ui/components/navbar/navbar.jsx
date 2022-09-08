import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/idea">Do You Have An Idea For Be Well To Cover? Submit It Here!</Link>
    </div>
  )
}
