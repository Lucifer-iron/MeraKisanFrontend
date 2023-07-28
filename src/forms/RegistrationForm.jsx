// RegistrationForm.js

import React, { useState } from "react";
import api from "../api/api";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [role, setRole] = useState("consumer");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API call to register endpoint
    api
      .register(name, email, password, role)
      .then((response) => {
        // Handle successful registration, e.g., show success message, redirect to login
        console.log("Registration successful", response.data);
      })
      .catch((error) => {
        // Handle registration error, e.g., display error message
        console.error("Registration failed", error);
      });
  };
  return (
    <div className="registration-form">
      <p className="form-title">Enter your details </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="password_confirmation">Confirm Password:</label>
          <input

            type="password"
            id="password_confirmation"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="consumer">Consumer</option>
            <option value="farmer">Farmer</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
