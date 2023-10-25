
import service from "../assets/images/hero/service.png"
import project from "../assets/images/hero/project.png"
import loan from "../assets/images/hero/loan.png"
import deposit from "../assets/images/hero/deposit.png"
import career from "../assets/images/hero/career.png"
import about from "../assets/images/hero/about.png"
import notice from "../assets/images/hero/notice.png"
import faqs from "../assets/images/hero/faqs.png"
import contact from "../assets/images/hero/contact.png"
import logo from "../assets/Logo/logo.png"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Banner() {
  const [urlArray, setUrlArray] = useState([]);
  const [title, setTitle] = useState({
    heading: '',
    subheading: '',
    bannerImage: ''
  });

  const location = useLocation();

  const urlArrays = location.pathname.split('/');

  useEffect(() => {
    if (urlArrays[1] === 'service') {
      setTitle({
        heading: 'Our Services',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: service
      });
    } else if (urlArrays[1] === 'project') {
      setTitle({
        heading: 'Our Projects',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: project
      });
    } else if (urlArrays[1] === 'loan') {
      setTitle({
        heading: 'Loans',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: loan
      });
    } else if (urlArrays[1] === 'deposit') {
      setTitle({
        heading: 'Deposits',
        subheading: 'Save and Secure Your Money With Us',
        bannerImage: deposit
      });
    } else if (urlArrays[1] === 'career') {
      setTitle({
        heading: 'Career',
        subheading:
          'Dhaka Credit is the first & largest Credit Union of its kind currently in Bangladesh.',
        bannerImage: career
      });
    } else if (urlArrays[1] === 'about') {
      setTitle({
        heading: 'About Us.',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: about
      });
    } else if (urlArrays[1] === 'contact') {
      setTitle({
        heading: 'Contact Us.',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: contact
      });
    } else if (urlArrays[1] === 'Notice') {
      setTitle({
        heading: 'Important Notices',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: notice
      });
    } else if (urlArrays[1] === 'faqs') {
      setTitle({
        heading: 'Frequently Asked Questions',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs
      });
    } else if (urlArrays[1] === 'accounts') {
      setTitle({
        heading: 'Accounts',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs
      });
    } else if (urlArrays[1] === 'account_loans') {
      setTitle({
        heading: 'Loans',
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: faqs
      });
    } else {
      setTitle({
        heading: process.env.REACT_APP_COMPANY_NAME,
        subheading:
          'Employment Creation is Our Goal; Self-Reliant Community is Our Dream.',
        bannerImage: logo
      });
    }

    setUrlArray(urlArrays);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence>
        <section className="  w-full">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 5 }}
            animate={{ opacity: 1 }}
            className="relative h-96"
          >
            <div
              style={{ backgroundImage: `url(${title.bannerImage})` }}
              className="h-full bg-cover bg-center bg-no-repeat"
            >
              <div className="absolute inset-0 h-full w-full overflow-hidden bg-gray-900 bg-opacity-80 bg-fixed">
                <div className="flex h-full flex-row items-end justify-center text-gray-300 ">
                  <div className="mb-24 px-6 text-center">
                    <motion.h2
                      className="mb-2  text-4xl font-bold leading-tight tracking-tight"
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20
                      }}
                      exit={{
                        opacity: 0,
                        x: -window.innerWidth,
                        transition: { duration: 0.3 }
                      }}
                      initial={{
                        opacity: 0,
                        x: -window.innerWidth,
                        transition: { duration: 0.3 }
                      }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      {title.heading}
                    </motion.h2>
                    <motion.p
                      className="hover:typing-demo inline-block  text-sm"
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20
                      }}
                      exit={{
                        opacity: 0,
                        x: -window.innerWidth,
                        transition: { duration: 0.3 }
                      }}
                      initial={{
                        opacity: 0,
                        x: window.innerWidth,
                        transition: { duration: 0.3 }
                      }}
                      animate={{ x: 0, opacity: 1 }}
                    >
                      {title.subheading}
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>

            {/* {urlArray.length > 2 ? (
              <div className="px-4 md:px-12 text-onPrimary">
                <div className="relative">
                  <div className="absolute left-0 -bottom-5">
                    <div className="flex uppercase">
                      <NavLink
                        to={`/${urlArray[1]}`}
                        state="About"
                        className="rounded-l-md bg-primaryVariant px-6 py-2 font-semibold "
                      >
                        {urlArray[1] === '' ? 'Home' : urlArray[1]}
                      </NavLink>
                      {urlArray.length > 2 && (
                        <span className="rounded-r-md bg-primary px-6 py-2">
                          {urlArray[2]}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )} */}
          </motion.div>
        </section>
      </AnimatePresence>
    </>
  );
}

export default Banner;
