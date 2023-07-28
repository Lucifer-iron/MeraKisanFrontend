// LoginForm.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import api from "../api/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make API call to login endpoint
    api
      .login(email, password)
      .then((response) => {
        // Handle successful login, e.g., store token, update user state
        console.log("Login successful", response.data);
      })
      .catch((error) => {
        // Handle login error, e.g., display error message
        console.error("Login failed", error);
      });
  };

  return (
    <div className="login-form">
      <p className="form-title">Please enter your e-mail and password</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
      <div className="form-footer">
        <p>
          Forgot your password? <a href="/reset-password">Reset password</a>
        </p>

        <p>
          Don't have an account? <Link to="/register">Register Here</Link>
        </p>

        <p>
          Want to go to the home page?<Link to="/home">Go to home page</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
