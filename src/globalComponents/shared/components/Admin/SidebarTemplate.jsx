import { motion } from 'framer-motion';
import { useEffect } from 'react';
// import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from './../../../../assets/Logo/white_logo.png';
import user from '../../../../assets/images/users/user.jpg';
import { useState } from 'react';

const SidebarTemplate = ({ children }) => {
  const [openNavbar, setOpenNavbarHandler] = useState(false);

  console.log(openNavbar);

  const openNavbarHandler = () => {
    setOpenNavbarHandler(!openNavbar);
  };

  return (
    <>
      <div className="flex">
        <div>
          <div
            className={` bg-onBackground h-screen transition duration-[2000ms] ${
              openNavbar ? 'w-20 ' : 'w-72'
            }`}
          >
            <div className="flex gap-2 p-5 border-b-[1px] ">
              <div className="">
                <img className="h-8" src={Logo} alt="header logo" />
              </div>
              <div className={`${openNavbar ? 'hidden' : ''}`}>
                <h2 className="self-center  text-xl font-semibold text-secondary items-center">
                  Dhaka Credit
                </h2>
              </div>
            </div>
            <div className="flex gap-2 p-5 border-b-[1px] ">
              <div className="">
                <img
                  className="h-8 w-8 bg-white rounded-full"
                  src={user}
                  alt="header logo"
                />
              </div>
              <div className={`${openNavbar ? 'hidden' : ''}`}>
                <h2 className="self-center  text-lg  text-secondary items-center">
                  Md israfil
                </h2>
              </div>
            </div>

            <div className="text-secondary p-4">
              <ul className="">
                <li className="py-2">
                  <NavLink className="" to="">
                    <i class="fa-regular fa-house px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Home
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="pages">
                    <i class="fa-solid fa-briefcase px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Pages
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-hand-holding-hand px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Deposit Product
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-sack-dollar px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Loans Product
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-piggy-bank px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Download
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-regular fa-address-card px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Notice
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-person-circle-question px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Slider Images
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-address-book px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      User
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-address-book px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Gallery Images
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-address-book px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      leaders
                    </span>
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="">
                    <i class="fa-solid fa-address-book px-3"></i>
                    <span className={`${openNavbar ? 'hidden' : ''}`}>
                      Account setting
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen ">
          <div className="top-0 ">
            <div className="flex bg-white border-b-2">
              <div className="w-1/3 p-3">
                <ul className="flex p-3  gap-6">
                  <li>
                    <div className="cursor-pointer" onClick={openNavbarHandler}>
                      <i class="fa-solid fa-bars"></i>
                    </div>
                  </li>
                  <li>
                    <a href="admin">Home</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="w-2/3 p-3">
                <div className="flex">
                  <div className="w-3/4">
                    <div className="">
                      <from>
                        <label
                          htmlFor=""
                          className="mb-2 text-sm font-medium text-gray-900 sr-only"
                        >
                          Search
                        </label>
                        <div className="">
                          <input
                            type="search"
                            className="block w-full p-3  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                            placeholder="search"
                          />
                        </div>
                      </from>
                    </div>
                  </div>
                  <div className="w-1/4">
                    <ul className="flex gap-10 justify-end p-3 mr-4">
                      <li>
                        <i class="fa-brands fa-rocketchat"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-bell"></i>
                      </li>
                      <li>
                        <i class="fa-solid fa-right-from-bracket"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Outlet />
          </div>
          <div className="mt-auto fixed bottom-0 w-full">
            <footer className="bg-surface  text-onSurface">
              <div className=" flex flex-col items-center justify-center p-3 py-5 ">
                <p className="text-sm">© 2022 . All Rights Reserved.</p>
                <p className="text-sm">Powered by Dhaka Credit ICT Squad.</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarTemplate;
