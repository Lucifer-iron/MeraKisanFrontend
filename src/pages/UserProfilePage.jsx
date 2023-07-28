// UserProfilePage.js

import React from "react";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";
import "./UserProfilePage.css";

const UserProfilePage = () => {
  return (
    <div className="user-profile-page">
      <Header />
      <h2 className="user-profile-page-title">User Profile</h2>
      <UserProfile />
      <Footer />
    </div>
  );
};

export default UserProfilePage;
