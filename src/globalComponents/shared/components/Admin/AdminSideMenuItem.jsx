import React from 'react';
import { NavLink } from 'react-router-dom';

function AdminSideMenuItem() {
  return (
    <li className="py-2">
      <NavLink className="" to="home">
        <i class="fa-regular fa-house px-3"></i>
        <span
        // className={`${openNavbar ? 'hidden' : ''}`}
        >
          Home
        </span>
      </NavLink>
    </li>
  );
}

export default AdminSideMenuItem;
