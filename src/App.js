import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './public_pages/home/Home';
import Service from './public_pages/service/Service';
import Project from './public_pages/project/Project';
import Loan from './public_pages/loan/Loan';
import Deposit from './public_pages/deposit/Deposit';
import Banner from './partials/Banner';
import { useLocation } from 'react-router-dom';
import Contact from './public_pages/contact/Contact';
import About from './public_pages/about/About';
import AboutUs from './public_pages/about/components/aboutUs/AboutUs';
import FoundersProfile from './public_pages/about/components/foundersProfile/FoundersProfile';
import OurStory from './public_pages/about/components/ourstory/OurStory';
import MissionAndValues from './public_pages/about/components/missionandvalues/MissionAndValues';
import CoreValues from './public_pages/about/components/corevalues/CoreValues';
import PresidentMessage from './public_pages/about/components/presidentmessage/PresidentMessage';
import CreditUnionMovement from './public_pages/about/components/CreditUnionMovement/CreditUnionMovement';
import Achievement from './public_pages/about/components/Achievement/Achievement';
import WomansActivity from './public_pages/about/components/WomansActivity/WomansActivity';
import DcCalender from './public_pages/about/components/DcCalender/DcCalender';
import Gallery from './public_pages/about/components/Gallery/Gallery';
import Publication from './public_pages/about/components/Publication/Publication';
import FrequentlyAskedQuestions from './public_pages/faq/FrequentlyAskedQuestions';
import Admin from './public_pages/admin/Admin';
import AdminHome from './public_pages/admin/components/home/AdminHome';
import AdminService from './public_pages/admin/components/service/AdminService';

import DepositProduct from './public_pages/admin/components/deposit product/DepositProduct';
import LoanProduct from './public_pages/admin/components/loan product/LoanProduct';
import Download from './public_pages/admin/components/download/Download';
import SliderImages from './public_pages/admin/components/slider_images/SliderImages';
import Notice from './public_pages/admin/components/notice/Notice';

import GalleryImage from './public_pages/admin/components/gallery/GalleryImage';
import Leaders from './public_pages/admin/components/leaders/Leaders';
import Setting from './public_pages/admin/components/setting/Setting';
import Users from './public_pages/admin/components/user/Users';
import Pages from './public_pages/admin/components/Pages/pages';
import JobCirculars from './public_pages/admin/components/jobCirculer/JobCirculars';
import AccountSetting from './public_pages/admin/components/accountSetting/AccountSetting';

function App() {
  const location = useLocation();

  const urlArrays = location.pathname.split('/');

  return (
    <>
      {urlArrays[1] === 'admin' ? (
        <div className="relative flex min-h-screen flex-col bg-background font-sans-serif">
          <Routes>
            <Route path="admin" element={<Admin />}>
              <Route path="home" element={<AdminHome />} />
              <Route path="service" element={<AdminService />} />
              <Route path="pages" element={<Pages />} />
              <Route path="deposit-product" element={<DepositProduct />} />
              <Route path="loans-product" element={<LoanProduct />} />
              <Route path="download" element={<Download />} />
              <Route path="notice" element={<Notice />} />
              <Route path="slider-images" element={<SliderImages />} />
              <Route path="user" element={<Users />} />
              <Route path="gallery" element={<GalleryImage />} />
              <Route path="leaders" element={<Leaders />} />
              <Route path="setting" element={<Setting />} />
              <Route path="Job-Circulars" element={<JobCirculars />} />
              <Route path="account_setting" element={<AccountSetting />} />
            </Route>
          </Routes>
        </div>
      ) : (
        <div className="relative flex min-h-screen flex-col bg-background font-sans-serif">
          <Header />
          {location.pathname === '/' ? '' : <Banner />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="project" element={<Project />} />
            <Route path="loan" element={<Loan />} />
            <Route path="deposit" element={<Deposit />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />}>
              <Route index element={<AboutUs />} />
              <Route path="founders-profile" element={<FoundersProfile />} />
              <Route path="our-story" element={<OurStory />} />
              <Route path="mission-vision" element={<MissionAndValues />} />
              <Route path="core-values" element={<CoreValues />} />
              <Route path="president-message" element={<PresidentMessage />} />
              <Route path="cu-movement" element={<CreditUnionMovement />} />
              <Route path="achievement" element={<Achievement />} />
              <Route path="women-activity" element={<WomansActivity />} />
              <Route path="dc-calender" element={<DcCalender />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="publication" element={<Publication />} />
            </Route>
            <Route path="faqs" element={<FrequentlyAskedQuestions />} />
            <Route path="admin" element={<Admin />} />
          </Routes>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
