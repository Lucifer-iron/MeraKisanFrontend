// CartPage.js


import Cart from "../components/Cart";
import "./CartPage.css";

const CartPage = () => {
  // Mock data for cart items
  const cartItems = [
    { id: 1, name: "Product 1", price: 10.99, desc: "This is a description",
    image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 19.99, 
    desc:"this is a description",
    image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 5.99, desc: "This is a description",
    image: "https://via.placeholder.com/150" },
   { id: 4, name: "Product 4", price: 15.99, desc: "This is a description",
   image: "https://via.placeholder.com/150"},
   { id: 5, name: "Product 5", price: 7.99, image: "https://via.placeholder.com/150"}
    // Add more cart items as needed
  ];

  return (
    <div className="cart-page">
      <h2 className="cart-page-title">Your Cart</h2>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;
