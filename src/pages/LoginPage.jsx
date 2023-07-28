// LoginPage.js


import LoginForm from "../forms/LoginForm";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2 className="login-page-title">Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
