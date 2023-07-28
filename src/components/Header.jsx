import { useState } from 'react';
import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi'; // Import icons from react-icons library
import { FaBars, FaSearch, FaTimes, } from 'react-icons/fa';
import './Header.css'; // Import the CSS file
import Dropdown from './dropdown.jsx';
import { NavLink } from 'react-bootstrap';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  if (!isSearchOpen) {
    document.getElementsByClassName('mobile-searchbar')[0].style.display = 'flex';
  }else{
    document.getElementsByClassName('mobile-searchbar')[0].style.display = 'none';
  }

  };



return (
  <header>
    <div className='mobile-menu-container'>
      <div className="mobile-menu-toggle" onClick={handleMobileMenuToggle}>
        <button type="button" onClick={handleMobileMenuToggle}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search.." name="search" />
        <button type="button" onClick={handleSearchToggle} >
          {isSearchOpen ? <FaTimes /> : <FaSearch />}
        </button>

      </div>
      <div className="logo-container">
        <NavLink href="/">
          <img src="/logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className='icons-container'>
        <div className="cart-icon">
          <NavLink href="/cart">
            <FiShoppingCart />
          </NavLink>
        </div>

        <div className="wishlist-icon">
          <NavLink href="/wishlist">
            <FiHeart />
          </NavLink>
        </div>

        <div className="user-icon">
          <NavLink href={"/login"}>
            <FiUser />
          </NavLink>
        </div>
      </div>
    </div>
    <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
      <ul >
        <li>
          <NavLink href='/'>Home</NavLink>
        </li>
        <li>
          <NavLink href='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>

    <div className="mobile-searchbar">
      <input type="text" placeholder="Search.." name="search" />
      <button type="button" ><FaSearch /></button>
    </div>

    <nav className='desktop-menu'>
      <div className="category-dropdown">
        <Dropdown />
      </div>

      <ul>
        <li>
          <NavLink href='/'>Home</NavLink>
        </li>
        <li>
          <NavLink href='/shop'>Shop</NavLink>
        </li>
        <li>
          <NavLink href='/about'>About</NavLink>
        </li>
        <li>
          <NavLink href='/contact'>Contact</NavLink>
        </li>
      </ul>
      <div className='icons-container'>
        <div className="cart-icon">
          <NavLink href="/cart">
            <FiShoppingCart />
          </NavLink>
        </div>

        <div className="wishlist-icon">
          <NavLink href="/wishlist">
            <FiHeart />
          </NavLink>
        </div>

        <div className="user-icon">
          <NavLink href="/login">
            <FiUser />
          </NavLink>
        </div>
      </div>
    </nav>




  </header>
);
};

export default Header;
