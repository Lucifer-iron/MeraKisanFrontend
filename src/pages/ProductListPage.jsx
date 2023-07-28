// ProductListPage.js

import React, { useEffect, useState } from "react";
import api from "../api/api";
import ProductList from "../components/ProductList";
import "./ProductListPage.css";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    // Fetch the list of products when the component mounts
    api
      .getProducts()
      .then((response) => setProducts(response.data.products))
      // Catch any errors and log them to the console
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-list-page">
      <h2 className="product-list-page-title">Product List</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListPage;
