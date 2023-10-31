import { motion } from 'framer-motion';
import PageContainer from '../../../components/PageContainer';
import { useEffect } from 'react';
// import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { Outlet } from 'react-router-dom';

const SidebarTemplate = ({ children }) => {
  return (
    <>
      <PageContainer>
        <div className="text-justify gap-6 md:flex-row ">
          <div
            className={`mb-6 h-full w-full overflow-hidden rounded-md bg-surface shadow-sm transition-all duration-300`}
          >
            <ul
              className={`md:flex w-full flex-col divide-y py-6  text-onSurface`}
            >
              {children}
            </ul>
          </div>
          <div
            className={`content  text-left text-onBackground   md:text-justify lg:text-justify`}
          >
            <Outlet />
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default SidebarTemplate;
