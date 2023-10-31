import React from 'react';

function AdminSideMenu({ children }) {
  return (
    <div className="text-secondary p-4">
      <ul className="py-2">{children}</ul>
    </div>
  );
}

export default AdminSideMenu;
