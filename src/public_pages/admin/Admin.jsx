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
      ></SidebarTemplate>
    </div>
  );
}

export default Admin;
