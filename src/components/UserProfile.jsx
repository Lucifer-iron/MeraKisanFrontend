// UserProfile.js

import React from "react";
import "./UserProfile.css";

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2 className="profile-title">User Profile</h2>
      <div className="profile-details">
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Address:</strong> {user.address}
        </div>
        <div>
          <strong>Phone:</strong> {user.phone}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
