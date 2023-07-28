// Notifications.js

import React from "react";
import "./Notifications.css";

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h2 className="notifications-title">Notifications</h2>
      <ul className="notifications-list">
        {notifications.map((notification) => (
          <li className="notification-item" key={notification.id}>
            <span>{notification.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
