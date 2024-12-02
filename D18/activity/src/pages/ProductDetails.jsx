import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Hook to navigate between pages

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetails();
  }, [id]);

  // Function to navigate back to the previous page
  const handleGoBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return product ? (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{product.title}</h1>
          <p className="lead">{product.category}</p>
          <p className="text-muted">Price: ${product.price}</p>
          <p>{product.description}</p>
          <button className="btn btn-primary mt-3">Add to Cart</button>
          <button
            onClick={handleGoBack}
            className="btn btn-secondary mt-3 ms-2"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mt-5 text-center">
      <p>Loading...</p>
    </div>
  );
};

export default ProductDetails;
