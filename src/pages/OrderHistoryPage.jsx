// OrderHistoryPage.js

import React from "react";
import Header from "../components/Header";
import OrderHistory from "../components/OrderHistory";
import Footer from "../components/Footer";
import "./OrderHistoryPage.css";

const OrderHistoryPage = () => {
  return (
    <div className="order-history-page">
      <Header />
      <h2 className="order-history-page-title">Order History</h2>
      <OrderHistory />
      <Footer />
    </div>
  );
};

export default OrderHistoryPage;
