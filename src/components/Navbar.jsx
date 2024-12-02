import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-12 bg-violet-800 bg- text-violet-50">
        <div className="text-2xl font-semibold text-violet-50"><a href="/">Swiftkart</a></div>
        <ul className="flex items-center gap-8">
            <li><Link to="/" className="text-lg hover:text-violet-300">Home</Link></li>
            <li><Link to="/products" className="text-lg hover:text-violet-300">Products</Link></li>
            <li><Link to="/form" className="text-lg hover:text-violet-300">Form</Link></li>
            <li><Link to="/api" className="text-lg hover:text-violet-300">Image API</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar