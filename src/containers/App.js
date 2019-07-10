import React from 'react'
import Header from '../components/Header'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className="scroll-container">
        <ProductList />
        <Footer />
      </div>
    </>
  )
}

export default App
