import { motion } from 'framer-motion';
import { useEffect } from 'react';
// import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Logo from './../../../../assets/Logo/white_logo.png';
import user from '../../../../assets/images/users/user.jpg';
import { useState } from 'react';

const SidebarTemplate = ({ children }) => {
  const [openNavbar, setOpenNavbarHandler] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openNavbarHandler = () => {
    setOpenNavbarHandler(!openNavbar);
  };
  <i class="fa-regular fa-image"></i>;
  const items = [
    { label: 'Home', link: '/admin/home', icon: 'fa-solid fa-house' },
    { label: 'Pages', link: '/admin/pages', icon: 'fa-brands fa-page4' },
    {
      label: 'Our Service',
      link: '/admin/service',
      icon: 'fa-solid fa-person-digging'
    },
    {
      label: 'Deposit Product',
      link: '/admin/deposit-product',
      icon: 'fa-solid fa-piggy-bank'
    },
    {
      label: 'Loans Product',
      link: '/admin/loans-product',
      icon: 'fa-solid fa-sack-dollar'
    },
    {
      label: 'Download',
      link: '/admin/download',
      icon: 'fa-solid fa-download'
    },
    { label: 'Notice', link: '/admin/notice', icon: 'fa-solid fa-flag' },
    {
      label: 'Slider Images',
      link: '/admin/slider-images',
      icon: 'fa-regular fa-image'
    },

    { label: 'User', link: '/admin/user', icon: 'fa-solid fa-user' },
    {
      label: 'Gallery Images',
      link: '/admin/gallery',
      icon: 'fa-solid fa-photo-film'
    },
    {
      label: 'Leaders',
      link: '/admin/leaders',
      icon: 'fa-solid fa-user-graduate'
    },
    {
      label: 'Account setting',
      link: '/admin/setting',
      icon: 'fa-solid fa-gears'
    }
    // Add more items as needed
  ];

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  console.log(activeItem);
  console.log(items);

  return (
    <>
      <div className="flex">
        <div>
          <div
            className={` bg-onBackground h-screen transition duration-[2000ms] ${
              openNavbar ? 'w-20 ' : 'w-72'
            }`}
          >
            <div className="flex gap-2 p-4 border-b-[1px] ">
              <div className="">
                <img className="h-8" src={Logo} alt="header logo" />
              </div>
              <div className={`${openNavbar ? 'hidden' : ''}`}>
                <h2 className="self-center  text-xl font-semibold text-secondary items-center">
                  Dhaka Credit
                </h2>
              </div>
            </div>
            <div className="flex gap-2 p-4 border-b-[1px] ">
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

            <div className="text-secondary ">
              <nav>
                <ul className="p-4">
                  {items.map((item, index) => (
                    <NavLink to={item.link}>
                      <li
                        key={index}
                        className={`py-2 hover:bg-secondary hover:shadow-sm hover:text-black hover:rounded ${
                          item === activeItem ? 'active' : ''
                        }`}
                        onClick={() => handleItemClick(item)}
                      >
                        <i className={`p-2 ${item.icon}`}></i>
                        <span className={`${openNavbar ? 'hidden' : ''}`}>
                          {item.label}
                        </span>
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </nav>
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
                    <div className=""></div>
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
