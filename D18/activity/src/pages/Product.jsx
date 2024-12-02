import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [modalProduct, setModalProduct] = useState(null); // State for the selected product in the modal

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  // Function to handle category change and filter products
  const handleCategoryChange = event => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    // Filter products based on selected category and search query
    filterProducts(selectedCategory, searchQuery);
  };

  // Function to handle search input changes and filter products
  const handleSearchChange = event => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter products based on search query and selected category
    filterProducts(selectedCategory, query);
  };

  // Function to filter products based on category and search query
  const filterProducts = (category, query) => {
    let filtered = products;

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filter by search query (title or description)
    if (query) {
      filtered = filtered.filter(
        product =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  // Function to handle opening the modal and setting the selected product
  const handleViewDetails = product => {
    setModalProduct(product);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalProduct(null);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search products by title or description"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Category Filter Dropdown */}
      <div className="mb-4">
        <select
          className="form-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p
                  className="card-text text-truncate"
                  style={{ maxHeight: '60px' }}
                >
                  {product.description}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
              </div>
              <div className="card-footer">
                <button
                  onClick={() => handleViewDetails(product)}
                  className="btn btn-primary w-100"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for product details */}
      {modalProduct && (
        <div
          className="modal fade show"
          style={{ display: 'block' }}
          tabIndex="-1"
          aria-labelledby="productModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="productModalLabel">
                  {modalProduct.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.title}
                  className="img-fluid mb-3"
                />
                <p>
                  <strong>Price:</strong> ${modalProduct.price}
                </p>
                <p>
                  <strong>Category:</strong> {modalProduct.category}
                </p>
                <p>
                  <strong>Description:</strong> {modalProduct.description}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
