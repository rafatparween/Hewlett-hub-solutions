import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { CartContext } from './product/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[white] fixed top-0 left-0 right-0 z-50 h-[70px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center ml-[-241px]">
            <img className='h-[76px] w-[83px]' src='https://thumbs.dreamstime.com/b/hhs-letter-logo-design-black-background-creative-initials-concept-247683198.jpg'/>
            
            <Link to="/" className="text-2xl text-[18px] text-[#0C71C3]">
            Hewlett Hub solutions 
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              to="/"
              className="text-[black] hover:text-[#1e40af] px-3 py-2 rounded-md text-sm font-medium
              hover:border border-[black] "
            >
              Home
            </Link>
            <Link
              to="/about"
              className=" hover:border border-[#1e40af] hover:text-[blue] px-3 py-2 rounded-md text-sm font-medium text-[black]"
            >
              About
            </Link>
            {/* <Link
              to="/service"
              className=" hover:border border-[#1e40af] hover:text-[#0f766e] px-3 py-2 rounded-md text-sm font-medium text-[black]"
            >
              Service
            </Link> */}
            <Link
              to="/product"
              className=" hover:border border-[#1e40af] hover:text-[#0f766e] px-3 py-2 rounded-md text-sm font-medium text-[black]"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className=" hover:border border-[#0f766e] hover:text-[#1e40af] px-3 py-2 rounded-md text-sm font-medium text-[black]"
            >
              Contact
            </Link>
            <Link
              to="/membership"
              className=" hover:border border-[#1e40af] hover:text-[#0f766e] px-3 py-2 rounded-md text-sm font-medium text-[black]"
            >
              Membership
            </Link>

            <div className="relative">
              <Link
                to="/cart"
                className=" hover:border border-[#0f766e] hover:text-[#1e40af] px-3 py-2 rounded-md text-sm font-medium flex items-center relative text-[blacj]"
              >
                <LocalMallIcon sx={{ fontSize: '2rem' }} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs text-[black]">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 focus:text-gray-500 text-[white]"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/service"
            className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Service
          </Link>
          <Link
            to="/product"
            className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Product
          </Link>
          <Link
            to="/contact"
            className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
          <Link
            to="/membership"
            className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] block px-3 py-2 rounded-md text-base font-medium"
          >
            Membership
          </Link>

          <Link
            to="/cart"
            className=" hover:border border-[#0f766e] text-gray-900 hover:text-[#0f766e] px-3 py-2 rounded-md text-sm font-medium relative"
          >
            <LocalMallIcon sx={{ fontSize: '2rem' }} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
