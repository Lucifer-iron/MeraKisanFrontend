// NotificationsPage.js

import React from "react";
import Header from "../components/Header";
import Notifications from "../components/Notifications";
import Footer from "../components/Footer";
import "./NotificationsPage.css";

const NotificationsPage = () => {
  return (
    <div className="notifications-page">
      <Header />
      <h2 className="notifications-page-title">Notifications</h2>
      <Notifications />
      <Footer />
    </div>
  );
};

export default NotificationsPage;
