import React from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Footer from './components/Footer'
import Form from './components/Form'
import ImageApi from './components/ImageApi'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/form" element={<Form />} />
        <Route path="/api" element={<ImageApi />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App