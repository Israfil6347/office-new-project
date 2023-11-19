import { motion } from 'framer-motion';
import { useEffect } from 'react';
// import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Logo from './../../../../assets/Logo/white_logo.png';
import user from '../../../../assets/images/users/user.jpg';
import { useState } from 'react';

const AccordionAnimation = {
  closed: { opacity: 1, width: 300 },
  open: { opacity: 1, width: 'auto' }
};
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

  {
    label: 'Gallery Images',
    link: '/admin/gallery',
    icon: 'fa-solid fa-photo-film'
  },
  {
    label: 'Job Circulars',
    link: '/admin/Job-Circulars',
    icon: 'fa-solid fa-gears'
  },
  {
    label: 'Leaders',
    link: '/admin/leaders',
    icon: 'fa-solid fa-user-graduate'
  },
  { label: 'User', link: '/admin/user', icon: 'fa-solid fa-user' },
  // {
  //   label: 'Account setting',
  //   link: '/admin/account_setting',
  //   icon: 'fa-solid fa-gears'
  // },
  {
    label: 'Setting',
    link: '/admin/setting',
    icon: 'fa-solid fa-gears'
  }

  // Add more items as needed
];

const ResSidebarTemplate = ({ children }) => {
  const [openNavbar, setOpenNavbarHandler] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openNavbarHandler = () => {
    setOpenNavbarHandler(!openNavbar);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="flex">
        <div className="w-full relative  lg:static float-right md:order-2">
          <div className="top-0 ">
            <div className="flex bg-white border-b-2">
              <div className="w-1/3 p-3">
                <ul className="flex p-3  gap-6">
                  <li className={`${openNavbar ? '' : 'hidden'}`}>
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

          <div
            className="scrollbar-width: thin overflow-hidden overflow-x-scroll overflow-y-scroll md:border"
            style={
              ({ maxWidth: window.innerWidth - 10 },
              { height: window.innerHeight - 140 })
            }
          >
            <Outlet />
          </div>
          <div className="mt-auto md:fixed bottom-0 w-full">
            <footer className="bg-surface  text-onSurface">
              <div className=" flex flex-col p-3 py-5 ">
                <p className="text-sm">© 2022 . All Rights Reserved.</p>
                <p className="text-sm">Powered by Dhaka Credit ICT Squad.</p>
              </div>
            </footer>
          </div>
        </div>
        <div
          className={`absolute lg:static lg:float-left md:order-1  ${
            openNavbar ? 'hidden md:block' : ''
          }`}
        >
          <motion.div
            initial="closed"
            animate={openNavbar ? 'open' : 'closed'}
            exit="closed"
            variants={AccordionAnimation}
            transition={{ duration: 0.5 }}
            className={`bg-onBackground h-screen`}
          >
            <div className="flex justify-between items-center w-full border-b-[1px] p-4 ">
              <div className="flex gap-2">
                <div className="">
                  <img className="h-8" src={Logo} alt="header logo" />
                </div>
                <div className={`${openNavbar ? 'hidden' : ''}`}>
                  <h2 className="self-center  text-xl font-semibold text-secondary items-center">
                    Dhaka Credit
                  </h2>
                </div>
              </div>
              <div className={`${openNavbar ? 'hidden' : ''}`}>
                <div className="cursor-pointer" onClick={openNavbarHandler}>
                  <i class="fa-solid fa-bars text-secondary"></i>
                </div>
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
                        className={`py-2 hover:bg-secondary hover:shadow-sm hover:text-black hover:rounded  ${
                          openNavbar ? 'flex  justify-center items-center ' : ''
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ResSidebarTemplate;
