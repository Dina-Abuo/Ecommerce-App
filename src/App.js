import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//component
import { Header, Footer } from './component'
//pages
import { Home, Contact } from './pages'
export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}
