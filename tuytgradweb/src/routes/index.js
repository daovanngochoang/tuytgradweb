import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header"
import Footer from "../components/footer"
import Home from "../pages/home"
import Contact from "../pages/contact"
import Contribute from "../pages/contribute"
import Customer from "../pages/customer"
import Branch from "../pages/introducBranch"
import News from "../pages/news"
import Product from "../pages/product"
import Services from "../pages/services"
const routers = () => {
  return (
    <div className='route-wrapper'>
        <Header/>
      <div className='router-wrapper-body'>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact/" element={<Contact/>} />
            <Route path="/contribute/" element={<Contribute/>} />
            <Route path="/customer/" element={<Customer/>} />
            <Route path="/branch/" element={<Branch/>} />
            <Route path="/news/" element={<News/>} />
            <Route path="/Product/" element={<Product/>} />
            <Route path="/services/" element={<Services/>} />
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  )
}

export default routers
