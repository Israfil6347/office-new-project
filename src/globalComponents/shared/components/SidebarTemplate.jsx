import { motion } from 'framer-motion';
import PageContainer from '../../PageContainer';
import { useEffect } from 'react';
// import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { Outlet } from 'react-router-dom';

const SidebarTemplate = ({
  sidebarMenuExpended,
  setSidebarMenuExpended,
  sidebarMenuTitle,
  children
}) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <>
      <PageContainer>
        <div className="text-justify gap-6 md:flex-row ">
          

          <div
            className={`mb-6 h-full w-full overflow-hidden rounded-md bg-surface shadow-sm transition-all duration-300`}
          >
            {/* <motion.h2
              className="flex bg-primary p-6 font-semibold uppercase text-onPrimary hover:text-green-200"
              onClick={() => setSidebarMenuExpended(!sidebarMenuExpended)}
            >
              <span
                className={`${!sidebarMenuExpended ? 'md:block' : 'md:hidden'}`}
              >
                {sidebarMenuTitle}
              </span>
              <span className="ml-1 mt-1">
                <div className="hidden md:block">
                  {!sidebarMenuExpended ? (
                    <RxDoubleArrowRight />
                  ) : (
                    <RxDoubleArrowLeft />
                  )}
                </div>
              </span>
            </motion.h2> */}
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
