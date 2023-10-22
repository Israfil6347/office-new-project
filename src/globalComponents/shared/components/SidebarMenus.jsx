import React from 'react';

function SidebarMenus({ children }) {
  return (
    <ul className="flex w-full flex-col divide-y text-onSurface">{children}</ul>
  );
}

export default SidebarMenus;
