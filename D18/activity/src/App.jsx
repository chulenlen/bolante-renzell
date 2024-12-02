import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavBar from './components/AppNavBar';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Category from './pages/CategoriesAndProducts';
import Categories from './pages/Categories';

const App = () => {
  return (
    <div>
      <Router>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products/categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
