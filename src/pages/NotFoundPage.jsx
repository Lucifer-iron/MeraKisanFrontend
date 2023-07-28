// NotFoundPage.js

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Header />
      <h2 className="not-found-page-title">404 - Page Not Found</h2>
      <p className="not-found-page-description">
        Oops! The page you are looking for does not exist.
      </p>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
