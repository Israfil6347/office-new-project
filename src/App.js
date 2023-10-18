import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from "./public_pages/home/Home";
import Service from "./public_pages/service/Service"
import Project from "./public_pages/project/Project"
import Loan from "./public_pages/loan/Loan";
import Deposit from "./public_pages/deposit/Deposit";
import Banner from "./partials/Banner";
import { useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();

  console.log(location)
  return (
    <div className="relative flex min-h-screen flex-col bg-background font-sans-serif">
      <Header />
      {location.pathname === '/' ? '' : <Banner />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="project" element={<Project />} />
        <Route path="loan" element={<Loan />} />
        <Route path="deposit" element={<Deposit />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;