import React from 'react';
import SidebarTemplate from '../../globalComponents/shared/components/Admin/SidebarTemplate';
import AdminSideMenu from '../../globalComponents/shared/components/Admin/AdminSideMenu';
import { NavLink } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <SidebarTemplate
        sidebarMenuTitle={'Admin'}
        sidebarMenuExpended={false}
        // setSidebarMenuExpended={function (sidebarMenuExpended: boolean): void {
        //   throw new Error("Function not implemented.");
        // }}
      >
        <AdminSideMenu>
          <li className="py-2">
            <NavLink className="" to="home">
              <i class="fa-regular fa-house px-3"></i>
              <span
              //   className={`${openNavbar ? 'hidden' : ''}`}
              >
                Home
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="/admin/service">
              <i class="fa-solid fa-briefcase px-3"></i>
              <span
              //   className={`${openNavbar ? 'hidden' : ''}`}
              >
                Service
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="">
              <i class="fa-solid fa-hand-holding-hand px-3"></i>
              <span
              //   className={`${openNavbar ? 'hidden' : ''}`}
              >
                Project
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="">
              <i class="fa-solid fa-sack-dollar px-3"></i>
              <span
              //   className={`${openNavbar ? 'hidden' : ''}`}
              >
                Loan
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="">
              <i class="fa-solid fa-piggy-bank px-3"></i>
              <span
              //   className={`${openNavbar ? 'hidden' : ''}`}
              >
                Deposit
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="">
              <i class="fa-regular fa-address-card px-3"></i>
              <span
              //   className={`${openNavbar ? 'hidden' : ''}`}
              >
                About
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="">
              <i class="fa-solid fa-person-circle-question px-3"></i>
              <span
              //    className={`${openNavbar ? 'hidden' : ''}`}
              >
                Faqs
              </span>
            </NavLink>
          </li>
          <li className="py-2">
            <NavLink to="">
              <i class="fa-solid fa-address-book px-3"></i>
              <span
              //   className={`${openNavbar ? 'hidden' : ''}`}
              >
                Contacts
              </span>
            </NavLink>
          </li>
        </AdminSideMenu>
      </SidebarTemplate>
    </div>
  );
}

export default Admin;
