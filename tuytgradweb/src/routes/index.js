// routes.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Contact from "../pages/Contribute";
import Contribute from "../pages/Contribute";
import Customer from "../pages/Customer";
import Branch from "../pages/introducBranch";
import News from "../pages/News";
import Product from "../pages/Product";
import Services from "../pages/Services";

const Routers = () => {
  return (
    <div className='route-wrapper'>
      <Header />
      <div className='router-wrapper-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/contribute/" element={<Contribute />} />
          <Route path="/customer/" element={<Customer />} />
          <Route path="/branch/" element={<Branch />} />
          <Route path="/news/" element={<News />} />
          <Route path="/product/" element={<Product />} />
          <Route path="/services/" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Routers;
