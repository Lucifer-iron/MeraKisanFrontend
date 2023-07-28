// ProductDetailPage.js

import React from "react";
import ProductDetail from "../components/ProductDetail";
import "./ProductDetailsPage.css";

const ProductDetailPage = () => {
  // Mock data for product
  const product = {
    _id: "1",
    name: "Product 1",
    image: "/images/product-1.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    brand: "Brand 1",
    category: "Category 1",
    price: 99.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  };

  return (
    <div className="product-detail-page">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
