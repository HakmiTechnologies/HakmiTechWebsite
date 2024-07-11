import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/mainLogo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent text-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/allblogs" className="text-white hover:text-gray-400">Blogs</Link>
          <Link to="/careers" className="text-white hover:text-gray-400">Career</Link>
          <Link to="/contact-us" className="text-white hover:text-gray-400">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 p-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            {/* <Link to="/about" className="hover:text-gray-400">Services</Link> */}
            <Link to="/careers" className="hover:text-gray-400">Career</Link>
            <Link to="/contact-us" className="hover:text-gray-400">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


