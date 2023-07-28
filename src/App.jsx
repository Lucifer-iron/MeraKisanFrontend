import React from "react";
import axios from "axios";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import "./App.css";

axios
  .get("http://localhost:3000/api/test")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/cart/:id?" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* <Route path="/checkout" element={<CheckoutPage />} />
     
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/placeorder" element={<PlaceOrderPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/admin/userlist" element={<UserListPage />} />
        <Route path="/admin/user/:id/edit" element={<UserEditPage />} />
        <Route path="/admin/productlist" element={<ProductListPage />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditPage />} />
        <Route path="/admin/orderlist" element={<OrderListPage />} />
        <Route path="/search/:keyword" element={<HomePage />} />
        <Route path="/page/:pageNumber" element={<HomePage />} />
        <Route path="/search/:keyword/page/:pageNumber" element={<HomePage />} />
        <Route path="/about" element={<About />} /> */}

        <Route path="/about" element={<About />} />
        {/* Add more routes for other pages */}
        {/* <Route path="*" element={<Pagenotfound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
