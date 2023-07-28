// RegistrationPage.js

import Header from "../components/Header";
import RegistrationForm from "../forms/RegistrationForm";
import Footer from "../components/Footer";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <h2 className="registration-page-title">Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
