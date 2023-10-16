import React from 'react';
import Logo from '../assets/Logo/logo.png'
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  return (
    <>   
      <section className='sticky top-0 z-20 w-full bg-transparent transition-all duration-300'>
      <nav
          className="relative bg-surface text-onSurface shadow-sm "
        >
          <div className="flex flex-wrap items-center justify-between px-4 md:px-12">
            <NavLink to="/" className="flex">
            
                <img
                  className="my-3 h-10 md:h-12 lg:h-10"
                  src={Logo}
                  alt="header logo"
                />
              
              <span
                className="self-center pl-3 text-xl font-semibold"
              >
                Dhaka Credit
              </span>
            </NavLink>
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="m-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
              aria-controls="navbar-multi-level"
              onClick={() => {
                if (mobileMenu) {
                  setMobileMenu(false);
                } else {
                  setMobileMenu(true);
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`w-full md:block md:w-auto  ${
                mobileMenu ? 'absolute inset-0 h-screen bg-surface' : 'hidden'
              }`}
              id="navbar-multi-level"
            >
              <div className="flex justify-between border-b-2 border-primary bg-background md:border-none ">
                <div className="flex pt-3 md:hidden ">
                  <img className="h-10 pl-3" src={Logo} alt="header logo" />
                  <span className="-mt-3 ml-3 self-center text-xl  font-semibold text-primary antialiased lg:text-2xl">
                    Dhaka Credit
                  </span>
                </div>
                <div className="">
                  <button
                    data-collapse-toggle="navbar-multi-level"
                    type="button"
                    className="  m-3 rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
                    aria-controls="navbar-multi-level"
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <ul
                className="mt-4 flex flex-col items-center gap-2 py-4 pt-4 text-lg md:mt-0 md:flex-row md:items-center md:border-0 md:text-sm md:font-bold lg:gap-6 "
              >
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className="block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0" 
                
                  >
                    Home
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className="block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0" 
                
                  >
                    Service
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className="block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0" 
                
                  >
                    Project
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <div className="relative group">
                    <summary className="m-1 btn">open or close <i class="fa-solid fa-caret-down"></i></summary>
                    <ul
                      className="p-2  shadow menu dropdown-content z-[1] bg-white rounded-box w-32 absolute hidden group-hover:block "
                    >
                      <li className="py-2"><a>Item 1</a></li>
                      <li className=""><a>Item 2</a></li>
                    </ul>
                  </div>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className="block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0" 
                
                  >
                    Loan
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className="block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0" 
                
                  >
                    Deposit
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className="block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0" 
                
                  >
                    About
                  </NavLink>
                </li>
                <li className="group relative inline-block">
                  <NavLink
                    to="contact"
                    className="block border-b-2 border-transparent py-2 pl-3 pr-4 hover:scale-110 md:p-0" 
                
                  >
                    Faqs
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Header;

