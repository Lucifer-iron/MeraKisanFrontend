// OrderHistory.js

import React from "react";
import "./OrderHistory.css";

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history">
      <h2 className="history-title">Order History</h2>
      <div className="history-list">
        {orders.map((order) => (
          <div className="order-item" key={order.id}>
            <div>
              <strong>Order ID:</strong> {order.id}
            </div>
            <div>
              <strong>Date:</strong> {order.date}
            </div>
            <div>
              <strong>Amount:</strong> ${order.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
